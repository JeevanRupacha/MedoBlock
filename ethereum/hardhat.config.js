require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/yxvBmxZDj5gipvUCOEdQ24O7JGp3tmVT`,
      accounts: ['ad1a66e002403110859c4c871a90cf19eea5c1b61ceb63fdb2ef0f1034dff6ca']
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul",
        viaIR: true // Enable --via-ir flag
      }
    }
  }
};
