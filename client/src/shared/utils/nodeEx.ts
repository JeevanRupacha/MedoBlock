const ethers = require('ethers');

const getRawMaterialsContract = async () => {
  if (!ethers.ethereum) return;

  const provider = new ethers.providers.Web3Provider(ethers.ethereum);
  const signer = provider.getSigner();

  const rawMaterialsAddress = 'YOUR_SMART_CONTRACT_ADDRESS';
  const rawMaterialsABI = [
    // Your contract ABI here
  ];

  const contract = new ethers.Contract(rawMaterialsAddress, rawMaterialsABI, signer);
  return contract;
};

// Usage example
async function main() {
  const rawMaterialsContract = await getRawMaterialsContract();
  if (rawMaterialsContract) {
    // Interact with the contract using the `rawMaterialsContract` instance
    console.log('Contract:', rawMaterialsContract.address);
  } else {
    console.log('Ethereum provider is not available.');
  }
}

main().catch((error) => {
  console.error(error);
});


// In the example above, you first import the ethers library. Then, you define the getRawMaterialsContract function, which checks if ethers.ethereum is available (assuming you have already initialized a connection to your Ethereum node).

// Inside the function, you create a Web3Provider instance using the ethers.ethereum provider. Then, you get a Signer object using the provider's getSigner method.

// Next, you define the smart contract's address and ABI (Application Binary Interface). Replace 'YOUR_SMART_CONTRACT_ADDRESS' with the actual address of your smart contract, and 'YOUR_CONTRACT_ABI' with the ABI of your smart contract.

// Finally, you create a new Contract instance using the address, ABI, and signer, and return it.

// In the usage example, you can call the getRawMaterialsContract function and interact with the contract instance if it's available. Remember to replace the console.log statement with your desired contract interaction logic.