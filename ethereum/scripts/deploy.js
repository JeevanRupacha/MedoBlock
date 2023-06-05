const hre = require("hardhat");

const main = async () => {
  const medSupplyChainFactory = await hre.ethers.getContractFactory("MedSupplyChainFactory");
  const medSupplyChainContract = await medSupplyChainFactory.deploy();

  await medSupplyChainContract.deployed();

  console.log("Supply Chain Factory address: ", medSupplyChainContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();