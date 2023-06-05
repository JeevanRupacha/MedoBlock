// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract MedSupplyChain{
    uint public idCount;
    uint256 public timeStamp;

    ModelsStruct.ManuRequestEntity public manuRequest;
    ModelsStruct.SupplyEntity public supply;
    ModelsStruct.ManuRequestEntity public manuRequestSatus;
    ModelsStruct.TransportEntity public transportRequest;
    ModelsStruct.TransportEntity public transportRequestStatus;
    ModelsStruct.FdaRequestEntity public fdaRequest;
    ModelsStruct.FdaRequestEntity public fdaRequestStatus;
    ModelsStruct.MedicineEntity public sendRetailer;
    ModelsStruct.TransportEntity public medicineTrasReq;
    ModelsStruct.TransportEntity public medicineTrasReqStatus;
    ModelsStruct.MedicineEntity public soldCustomer;

    constructor(uint _idCount){
        idCount = _idCount; 
        timeStamp = block.timestamp;
    }

    function addManuRequest(
        string memory _id,
        string memory _name,
        uint _count,
        string memory _date,
        string memory _manuId,
        string memory _supplierId,
        bool _requestStatus
    ) public{
        ModelsStruct.ManuRequestEntity memory request = 
            ModelsStruct.ManuRequestEntity({
                id: _id,
                name: _name,
                count: _count,
                date: _date,
                manuId: _manuId,
                supplierId: _supplierId,
                requestStatus: _requestStatus
            });
        manuRequest = request;
    }

    function getManuRequest() view public returns(
        ModelsStruct.ManuRequestEntity memory
        // string memory, string memory, uint, string memory, string memory, string memory, bool
    ){
        return manuRequest;
    }
}