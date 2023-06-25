// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract RawMaterialSupply{
    mapping(string => SupplyEntity) public supplies;
    string[] public supplyKeys;

    function addSupply(
        string memory _id,
        string memory _supplierId,
        string memory _RawMaterialId,
        string memory _toId,
        string memory _name,
        uint _unitCount,
        string memory _pricePerUnit,
        address _medSupplyChainAddr
    ) public {
        supplyKeys.push(_id);
        SupplyEntity memory supply = SupplyEntity({
            id: _id,
            supplierId: _supplierId,
            RawMaterialId: _RawMaterialId,
            toId: _toId,
            name: _name,
            unitCount: _unitCount,
            pricePerUnit: _pricePerUnit,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        supplies[_id] = supply;
    }

    function getRawMaterialSupply(string memory key) public view returns (SupplyEntity memory){
        return supplies[key];
    }

    function getSupplyKeys() public view returns(string[] memory){
        return supplyKeys;
    }
}