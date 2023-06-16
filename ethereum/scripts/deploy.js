const hre = require("hardhat");

const main = async () => {
  const medSupplyChainFactory = await hre.ethers.getContractFactory("MedSupplyChainFactory");
  const medSupplyChainContract = await medSupplyChainFactory.deploy();

  const rawMaterials = await hre.ethers.getContractFactory("RawMaterials");
  const rawMaterialsContract = await rawMaterials.deploy()

  await medSupplyChainContract.deployed();
  await rawMaterialsContract.deployed();

  console.log("Supply Chain Factory address: ", medSupplyChainContract.address);
  console.log("Raw Materials address: ", rawMaterialsContract.address);
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