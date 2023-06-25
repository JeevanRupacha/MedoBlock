// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract Medicines{
    mapping(string => MedicineEntity) public medicines;
    string[] public medicineKeys;

    function addMedicine(
        string memory _id,
        string memory _name,
        string memory _description,
        string memory _manuId,
        string memory _expDate,
        string memory _fdaStatus,
        string memory _fdaAdminId,
        string memory _price,
        uint _count,
        address _medSupplyChainAddr
    ) public {
        medicineKeys.push(_id);
        MedicineEntity memory medicine = MedicineEntity({
            id: _id,
            name: _name,
            description: _description,
            manuId: _manuId,
            manuDate: block.timestamp,
            expDate: _expDate,
            fdaStatus: _fdaStatus,
            fdaAdminId: _fdaAdminId,
            price: _price,
            count: _count,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        medicines[_id] = medicine;
    }

    function updateMedicine(
        string memory _id,
        string memory _name,
        string memory _description,
        string memory _manuId,
        uint _manuDate,
        string memory _expDate,
        string memory _fdaStatus,
        string memory _fdaAdminId,
        string memory _price,
        uint _count,
        address _medSupplyChainAddr
    ) public {
        MedicineEntity memory medicine = MedicineEntity({
            id: _id,
            name: _name,
            description: _description,
            manuId: _manuId,
            manuDate: _manuDate,
            expDate: _expDate,
            fdaStatus: _fdaStatus,
            fdaAdminId: _fdaAdminId,
            price: _price,
            count: _count,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        medicines[_id] = medicine;
    }

    function getMedicine(string memory key) public view returns (MedicineEntity memory){
        return medicines[key];
    }

    function getMedicinesKeys() public view returns(string[] memory){
        return medicineKeys;
    }
}

//0xF79B72908b56dA8e1f1490EfD8a78e3dE73585DA