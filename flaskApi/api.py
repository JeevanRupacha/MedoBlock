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
import os

os.environ["OPENAI_API_KEY"] = "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"
app = Flask(__name__)
api = Api(app)

jsonData = """[
    {
    "id": "59799507-38c9-4f4a-aa81-9c775bfac14e",
    "name": "Treoe",
    "description": "THis is desd amd tje lkkm, awas amas thjere .",
    "manuId": "ZsDkAMZKqvbEs6TONNKwbOA4lkl1",
    "manuDate": "1687512312",
    "expDate": "2024-11-21",
    "fdaStatus": "ACCEPTED",
    "price": "567",
    "count": "567",
    "medSupplyChainAddr": "0xbEEFA47808bB337EE6d5EaAA564a571A2414a5bF"
    },
    {
    "id": "2da8d28f-249b-410f-b6af-fbf1f54819d9",
    "name": "Para-JEE20O",
    "description": "Medicine to help boost your performance. This will gurantee to boost your mind. just kidding",
    "manuId": "ZsDkAMZKqvbEs6TONNKwbOA4lkl1",
    "manuDate": "1687629636",
    "expDate": "2023-06-24",
    "fdaStatus": "ACCEPTED",
    "price": "230",
    "count": "100",
    "medSupplyChainAddr": "0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2"
    },
    {
    "id": "c1c62260-9069-4e9c-9fa3-b4444da66944",
    "name": "AMol",
    "description": "This is amol",
    "manuId": "ZsDkAMZKqvbEs6TONNKwbOA4lkl1",
    "manuDate": "1687675500",
    "expDate": "2023-06-30",
    "fdaStatus": "ACCEPTED",
    "price": "45",
    "count": "100",
    "medSupplyChainAddr": "0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2"
    },
    {
    "id": "2e1de2dc-a1d9-4d80-bf14-71fa1bf67e17",
    "name": "NOAMOL",
    "description": "This is no amlol . ",
    "manuId": "ZsDkAMZKqvbEs6TONNKwbOA4lkl1",
    "manuDate": "1687676028",
    "expDate": "2023-06-30",
    "fdaStatus": "REQUESTED",
    "price": "3434",
    "count": "100",
    "medSupplyChainAddr": "0xAF6d9e9fEe9b8Ed3A51C8aE28f0076F51c9Ff4d2"
    },
    {
    "id": "08ed04aa-316a-4585-a391-d421bf6bc8a1",
    "name": "Paracetamol",
    "description": "This is paracetamol ",
    "manuId": "ZsDkAMZKqvbEs6TONNKwbOA4lkl1",
    "manuDate": "1687700208",
    "expDate": "2023-06-29",
    "fdaStatus": "ACCEPTED",
    "price": "300",
    "count": "100",
    "medSupplyChainAddr": "0xCE1004c045fA8b92beC67C12BC79dB87C2698C60"
    }
    ]"""

def convertJsonDataToCsv():
        data = json.loads(jsonData)
        med_csv_file = open('med_csv_file.csv', 'w')
        csv_writer = csv.writer(med_csv_file)

        count = 0

        for med in data:
            if count == 0:
                header = med.keys()
                csv_writer.writerow(header)
                count += 1 
            csv_writer.writerow(med.values())
        
        med_csv_file.close()


class Chat (Resource):
    @app.route('/', methods=['GET'])
    def home():
        return {'data' : "Home server running..."}
    
    @app.route('/chat', methods=['GET'])
    def queryChat():
        #medicines = requests.get('https://exuberant-tan-toad.cyclic.app/').content
        #print(medicines)
        query_params = request.args
        
        convertJsonDataToCsv()

        loader = CSVLoader(file_path='med_csv_file.csv')
        index_creator = VectorstoreIndexCreator()
        docsearch = index_creator.from_loaders([loader])
        chain = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type="stuff", retriever=docsearch.vectorstore.as_retriever(), input_key="question")

        question = query_params['question']    
        response = chain({"question": question})

        return {'answer': response['result']}  

api.add_resource(Chat)


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=5002)