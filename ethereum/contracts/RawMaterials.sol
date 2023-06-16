// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract RawMaterials{
    mapping(string => RawMaterial) public rawMaterials;
    string[] public rawMatKeys;

    function addRawMaterial(
        string memory _id,
        string memory _name,
        string memory _description,
        string memory _supplierId,
        string memory _amount,
        string memory _price,
        string memory _unit
    ) public {
        rawMatKeys.push(_id);
        RawMaterial memory rawMat = RawMaterial({
            id: _id,
            name: _name,
            description: _description,
            timeStamp: block.timestamp,
            supplierId: _supplierId,
            amount: _amount,
            price: _price,
            unit: _unit
        });
        rawMaterials[_id] = rawMat;
    }

    // function updateRawMaterial(
    //     string memory _id,
    //     string memory _name,
    //     string memory _description,
    //     string memory _supplierId,
    //     string memory _amount,
    //     string memory _price,
    //     string memory _unit
    // ) public {
    //     require(rawMaterials[_id].timeStamp != 0, "Raw material does not exist.");
        
    //     RawMaterial memory updatedRawMat = RawMaterial({
    //         id: _id,
    //         name: _name,
    //         description: _description,
    //         timeStamp: block.timestamp,
    //         supplierId: _supplierId,
    //         amount: _amount,
    //         price: _price,
    //         unit: _unit
    //     });
        
    //     rawMaterials[_id] = updatedRawMat;
    // }

    function getRawMaterial(string memory key) public view returns (RawMaterial memory){
        return rawMaterials[key];
    }

    function getRawMaterialsKeys() public view returns(string[] memory){
        return rawMatKeys;
    }
}