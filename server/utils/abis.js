const supplyChainAbi = require('./MedSupplyChain.json');
const medicinesAbi = require('./Medicines.json');
const supplyChainFactoryAbi = require('./MedSupplyChainFactory.json');
const rawMaterialRequestAbi = require('./RawMaterialRequest.json');
const rawMaterialAbi = require('./RawMaterials.json');
const transportRequestAbi = require('./TransportRequest.json');

const supplyChainABI  = supplyChainAbi.abi;
const supplyChainFactoryABI = supplyChainFactoryAbi.abi;
const rawMaterialRequestABI = rawMaterialRequestAbi.abi;
const transportRequestABI = transportRequestAbi.abi;
const rawMaterialABI = rawMaterialAbi.abi;
const medicinesABI = medicinesAbi.abi;

module.exports = { 
    supplyChainABI,
    rawMaterialABI,
    supplyChainFactoryABI,
    rawMaterialRequestABI,
    transportRequestABI,
    medicinesABI
};