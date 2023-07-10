import requests 
import json
import csv

from flask import Flask, request
from flask_restful import Resource, Api
from flask_jsonpify import jsonify
from langchain.document_loaders import CSVLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from langchain.agents import load_tools
from flask import send_from_directory 
import os

os.environ["OPENAI_API_KEY"] = "YOUR_API_KEY"
app = Flask(__name__)
api = Api(app)

def convertJsonDataToCsv(json_res_data):
        data = json_res_data
        med_csv_file = open('med_csv_file.csv', 'w')
        csv_writer = csv.writer(med_csv_file)

        count = 0

        for med in data:
            if count == 0:
                header = med.keys()

                custom_header = []
                for i in header:
                    if(i == 'name'):
                        custom_header.append('Medicine name')
                    elif(i == 'manuId'):
                        custom_header.append('Medicine_manufacturer_identity')
                    elif(i == 'manuDate'):
                        custom_header.append('Medicine_manufactured_timestamp')
                    elif(i == 'expDate'):
                        custom_header.append('Medicine_expiry_date')
                    elif(i == 'fdaStatus'):
                        custom_header.append('FDA_status')
                    elif(i == 'count'):
                        custom_header.append('total_medicine_unit_count')
                    elif(i == 'medSupplyChainAddr'):
                        custom_header.append('Supply_chain_address')
                    else:
                        custom_header.append(i)        

                csv_writer.writerow(custom_header)
                count += 1 
            csv_writer.writerow(med.values())
        med_csv_file.close()


class Chat (Resource):
    @app.route('/', methods=['GET'])
    def home():
        return {'data' : "Home server running..."}
    
    @app.route('/favicon.ico', methods=['GET'])
    def favicon():
        return {'answer': 'Success'}  
        # return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


    @app.route('/chat', methods=['GET'])
    def queryChat():
        medicines = requests.get('https://shiny-mite-lab-coat.cyclic.app/medicines').content
        resMedicinesData = json.loads(medicines)['data']

        query_params = request.args
        
        convertJsonDataToCsv(resMedicinesData)

        loader = CSVLoader(file_path='med_csv_file.csv')
        index_creator = VectorstoreIndexCreator()
        docsearch = index_creator.from_loaders([loader])
        chain = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type="stuff", retriever=docsearch.vectorstore.as_retriever(), input_key="question")

        question = query_params['question']    
        response = chain({"question": question})

        return {'answer': response['result']}  
        # return {'answer': 'Success'}  

api.add_resource(Chat)


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=5004)
