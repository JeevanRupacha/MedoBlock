const express = require('express');
const { Web3 } = require('web3');
const { toBN } = require('web3-utils');


const supplyChainAbi = require('./utils/MedSupplyChain.json');
const { 
  SUPPLY_CHAIN_FACTORY_ADDRESS,
  MEDICINES_ADDRESS,
  RAW_MATERIALS_ADDRESS,
  RAW_MATERIAL_REQUEST_ADDRESS,
  TRANSPORT_REQUEST_ADDRESS
} = require('./utils/Constants');


const { 
  supplyChainFactoryABI,
  medicinesABI,
  rawMaterialABI,
  rawMaterialRequestABI,
  supplyChainABI,
  transportRequestABI, 
} = require('./utils/abis') 


const app = express();
const port = 8080;

// Create a new instance of Web3 using your preferred provider
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/yxvBmxZDj5gipvUCOEdQ24O7JGp3tmVT');

// Define your contract ABI
const contractABI = supplyChainAbi.abi;

// Define the contract address
const contractAddress = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';

// Create a new contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/', async (req, res) => {
    console.log("Home server")
})

// Define a route to fetch contract data
app.get('/suplychain/:address', async (req, res) => {
  const { address } = req.params;
  
  try {
    // Set the contract address dynamically
    contract.options.address = address;

    // Call your contract's methods to fetch data
    const keys = await contract.methods.getSupplyChainKeys().call();

    let  result = {}

    for(const index in keys){
        const data = await contract.methods.getSupplyChain(keys[index]).call();
        result = {...result, [keys[index]]: data}
    }

    res.json({ data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/medicines', async (req, res) => {
    try{
      const contract = new web3.eth.Contract(medicinesABI, MEDICINES_ADDRESS);
      const keys = await contract.methods.getMedicinesKeys().call();
      
      let result = {};
      for( key of keys){
        const medicine = await contract.methods.getMedicine(key).call();
        medicine.manuDate = medicine.manuDate.toString();
        medicine.count = medicine.count.toString();

        result = {...result, [key]: {id: medicine.id, name: medicine.name, description: medicine.description, manuId: medicine.manuId, manuDate: medicine.manuDate, expDate: medicine.expDate, fdaStatus: medicine.fdaStatus, price: medicine.price, count: medicine.count, medSupplyChainAddr: medicine.medSupplyChainAddr}};
      }

      res.json({ data: result });
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/allsupplychain', async (req,res) => {
  try{
    const contract = new web3.eth.Contract(supplyChainFactoryABI, SUPPLY_CHAIN_FACTORY_ADDRESS);
    const addresses = await contract.methods.getAllAddresses().call()
    
    let result = {}
    for( const address of addresses){
      const supplyChainContract = await new web3.eth.Contract(supplyChainABI, address);
      const keys = await supplyChainContract.methods.getSupplyChainKeys().call();
      
      let chainResult = {};
      for( key of keys){
        const supplyChainData = await supplyChainContract.methods.getSupplyChain(key).call();
        chainResult = {...chainResult, [key]: supplyChainData};
      }

      result = {...result, [address]: chainResult};
    }

    res.json({ data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get('/allrawmaterials', async (req, res) => {
  try{
    const contract = new web3.eth.Contract(rawMaterialABI, RAW_MATERIALS_ADDRESS);
    const keys = await contract.methods.getRawMaterialsKeys().call();
    
    let result = {};
    for( key of keys){
      const rawMat = await contract.methods.getRawMaterial(key).call();

  
      result = {...result, [key]: {id: rawMat.id, name: rawMat.name, description: rawMat.description, timeStamp: rawMat.timeStamp.toString(), supplierId: rawMat.supplierId, amount: rawMat.amount, price: rawMat.price, unit: rawMat.unit}};
    }

    res.json({ data: result });
  }catch(error){
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

app.get('/alltransports', async (req, res) => {
  try{
    const contract = new web3.eth.Contract(transportRequestABI, TRANSPORT_REQUEST_ADDRESS);
    const keys = await contract.methods.getTransportRequestKeys().call();
    
    let result = {};
    for( key of keys){
      const rawMat = await contract.methods.getTransportRequest(key).call();

  
      // result = {...result, [key]: {id: rawMat.id, name: rawMat.name, description: rawMat.description, timeStamp: rawMat.timeStamp.toString(), supplierId: rawMat.supplierId, amount: rawMat.amount, price: rawMat.price, unit: rawMat.unit}};
      result = {...result, [key]: {id: rawMat.id, initDate: rawMat.initDate, completeDate: rawMat.completeDate, transporterId: rawMat.transporterId, fromUserId: rawMat.fromUserId, toUserId: rawMat.toUserIdm, status: rawMat.status, cost: rawMat.cost, fromLocation: rawMat.fromLocation, toLocation: rawMat.toLocation, medSupplyChainAddr: rawMat.medSupplyChainAddr}};
    }

    res.json({ data: result });
  }catch(error){
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});