// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract Supplier{
    mapping(string => ModelsStruct.RawMaterial) public rawMaterials;
    string[] public rawMatKeys;

    mapping(string => ModelsStruct.TransportEntity) public transportRequests;
    string[] public transReqKeys;

    mapping(string => ModelsStruct.RawMaterial) public supplies;
    string[] public suppliesKeys;

    mapping(string => ModelsStruct.ManuRequestEntity) public manuRequests;
    string[] public manuReqKeys;

    function supply(
        string memory _id,
        string memory _name,
        string memory _description,
        string memory _supplierId,
        string memory _amount,
        string memory _price,
        string memory _unit 
    ) public{
        suppliesKeys.push(_id);
        ModelsStruct.RawMaterial memory rawMat = ModelsStruct.RawMaterial({
            id: _id,
            name: _name,
            description: _description,
            timeStamp: block.timestamp,
            supplierId: _supplierId,
            amount: _amount,
            price: _price,
            unit: _unit  
        });
        supplies[_id] = rawMat;
    }

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
        ModelsStruct.RawMaterial memory rawMat = ModelsStruct.RawMaterial({
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

    function requestTransport(
        string memory _id,
        string memory _initDate,
        string memory _completeDate,
        address  _transporter,
        address  _fromAddress,
        address  _toAddress,
        string memory _fromUserId,
        string memory _toUserId,
        string memory _status,
        string memory _cost,
        string memory _fromLocation,
        string memory _toLocation
    ) public {
        transReqKeys.push(_id);
        ModelsStruct.TransportEntity memory transport = ModelsStruct.TransportEntity({
            id: _id,
            initDate: _initDate,
            completeDate: _completeDate,
            transporter: _transporter,
            fromAddress: _fromAddress,
            toAddress: _toAddress,
            fromUserId: _fromUserId,
            toUserId: _toUserId,
            status: _status,
            cost: _cost,
            fromLocation: _fromLocation,
            toLocation: _toLocation
        });
        transportRequests[_id] = transport;
    }

    function manuTransport(
        string memory _id,
        string memory _name,
        uint _count,
        string memory _date,
        string memory _manuId,
        string memory _supplierId,
        bool _requestStatus
    ) public {
        manuReqKeys.push(_id);
        ModelsStruct.ManuRequestEntity memory manuRequest = ModelsStruct.ManuRequestEntity({
            id: _id,
            name: _name,
            count: _count,
            date: _date,
            manuId: _manuId,
            supplierId: _supplierId,
            requestStatus: _requestStatus
        });
        manuRequests[_id] = manuRequest;
    }

    function getRawMaterial(string memory key) public view returns (ModelsStruct.RawMaterial memory){
        return rawMaterials[key];
    }

    function getSupply(string memory key) public view returns (ModelsStruct.RawMaterial memory){
        return supplies[key];
    }

    function getManuRequest(string memory key) public view returns (ModelsStruct.ManuRequestEntity memory){
        return manuRequests[key];
    }

    function getTransportRequest(string memory key) public view returns (ModelsStruct.TransportEntity memory){
        return transportRequests[key];
    }
}