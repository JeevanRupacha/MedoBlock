const express = require('express');
const { Web3 } = require('web3');
//const {supplyChainABI} = require('./utils/abis');
const supplyChainAbi = require('./utils/MedSupplyChain.json');


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
app.get('/contract/:address', async (req, res) => {
  const { address } = req.params;
  
  console.log(address)
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
    //todo return all medicines
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});