// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract Supplier{
    // manufacturer request 
    
    //optional 
    //Fda admin request 
    //fda Admin accept  
    
    // transporter request 
    // supplies 
    // raw materials list 

    mapping(string => ModelsStruct.RawMaterial) public rawMaterials; //id => RawMaterial
    string[] public rawMatKeys;

    mapping(string => ModelsStruct.TransportEntity) public transportRequests;
    string[] public transReqKeys;

    mapping(string => ModelsStruct.RawMaterial) public supplies;
    string[] public suppliesKeys;

    mapping(string => ModelsStruct.RawMaterial) public manuRequests;
    string[] public manuReqKeys;


    function supply(
        string memory _id,
        string memory _name,
        string memory _description,
        uint _unitCount,
        string memory _pricePerUnit
    ) public{
        suppliesKeys.push(_id);
        ModelsStruct.RawMaterial memory rawMat = ModelsStruct.RawMaterial({
            id: _id,
            name: _name,
            description: _description,
            unitCount: _unitCount,
            pricePerUnit: _pricePerUnit
        });
        supplies[_id] = rawMat;
    }

    function tranport(string memory key, ModelsStruct.TransportEntity memory _transport) public{
        transReqKeys.push(key);
        transportRequests[key] = _transport;
    }


    function getRawMaterials() public view returns (ModelsStruct.RawMaterial[] memory) {
        ModelsStruct.RawMaterial[] memory result = new ModelsStruct.RawMaterial[](rawMatKeys.length);
        
        for (uint256 i = 0; i < rawMatKeys.length; i++) {
            string storage key = rawMatKeys[i];
            result[i] = rawMaterials[key];
        }

        return result;
    }

    function getRawMaterial(string memory key) public view returns (ModelsStruct.RawMaterial memory){
        return rawMaterials[key];
    }


    function getSupplies() public view returns (ModelsStruct.RawMaterial[] memory) {
        ModelsStruct.RawMaterial[] memory result = new ModelsStruct.RawMaterial[](transReqKeys.length);
        
        for (uint256 i = 0; i < suppliesKeys.length; i++) {
            string storage key = suppliesKeys[i];
            result[i] = supplies[key];
        }

        return result;
    }

    function getSupply(string memory key) public view returns (ModelsStruct.RawMaterial memory){
        return supplies[key];
    }

    function getSuppliesKeys() public view returns (string[] memory){
        return suppliesKeys;
    }


    function getManuReqests() public view returns (ModelsStruct.RawMaterial[] memory) {
        ModelsStruct.RawMaterial[] memory result = new ModelsStruct.RawMaterial[](manuReqKeys.length);
        
        for (uint256 i = 0; i < manuReqKeys.length; i++) {
            string storage key = manuReqKeys[i];
            result[i] = manuRequests[key];
        }

        return result;
    }

    function getManuRequest(string memory key) public view returns (ModelsStruct.RawMaterial memory){
        return manuRequests[key];
    }


    function getTransportRequests() public view returns (ModelsStruct.TransportEntity[] memory) {
        ModelsStruct.TransportEntity[] memory result = new ModelsStruct.TransportEntity[](transReqKeys.length);
        
        for (uint256 i = 0; i < transReqKeys.length; i++) {
            string storage key = transReqKeys[i];
            result[i] = transportRequests[key];
        }

        return result;
    }

    function getTransportRequest(string memory key) public view returns (ModelsStruct.TransportEntity memory){
        return transportRequests[key];
    }
}