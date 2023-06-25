import rawMaterailsAbi from '../abiFiles/RawMaterials.json';
import supplyChainAbi from '../abiFiles/MedSupplyChain.json';
import supplyChainFactoryAbi from '../abiFiles/MedSupplyChainFactory.json';
import rawMaterialRequest from '../abiFiles/RawMaterialRequest.json';
import transportRequest from '../abiFiles/TransportRequest.json';
import medicines from '../abiFiles/Medicines.json';


const rawMaterialsABI  = rawMaterailsAbi.abi
const supplyChainABI  = supplyChainAbi.abi;
const supplyChainFactoryABI = supplyChainFactoryAbi.abi;
const rawMaterialRequestABI = rawMaterialRequest.abi;
const transportRequestABI = transportRequest.abi;
const medicinesABI = medicines.abi;

export { 
    rawMaterialsABI,
    supplyChainABI,
    supplyChainFactoryABI,
    rawMaterialRequestABI,
    transportRequestABI,
    medicinesABI
};