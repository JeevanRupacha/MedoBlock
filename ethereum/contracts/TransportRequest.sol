// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract TransportRequest{
    mapping(string => TransportEntity) public transportRequests;
    string[] public transportRequestKeys;

    function addRequest(
        string memory  _id,
        string memory  _initDate,
        string memory  _completeDate,
        string memory _transporterId,
        string memory  _fromUserId,
        string memory  _toUserId,
        string memory  _status,
        string memory  _cost,
        string memory  _fromLocation,
        string memory  _toLocation,
        address _medSupplyChainAddr
    ) public {
        transportRequestKeys.push(_id);
        TransportEntity memory request = TransportEntity({
            id: _id,
            initDate: _initDate,
            completeDate: _completeDate,
            transporterId: _transporterId,
            fromUserId: _fromUserId,
            toUserId: _toUserId,
            status: _status,
            cost: _cost,
            fromLocation: _fromLocation,
            toLocation: _toLocation,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        transportRequests[_id] = request;
    }

    function updateRequest(
        string memory  _id,
        string memory  _initDate,
        string memory  _completeDate,
        string memory _transporterId,
        string memory  _fromUserId,
        string memory  _toUserId,
        string memory  _status,
        string memory  _cost,
        string memory  _fromLocation,
        string memory  _toLocation,
        address _medSupplyChainAddr
    ) public {
        //require(requests[_id].id != '', "Raw material does not exist.");
        
        TransportEntity memory request = TransportEntity({
            id: _id,
            initDate: _initDate,
            completeDate: _completeDate,
            transporterId: _transporterId,
            fromUserId: _fromUserId,
            toUserId: _toUserId,
            status: _status,
            cost: _cost,
            fromLocation: _fromLocation,
            toLocation: _toLocation,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        transportRequests[_id] = request;
    }

    function getTransportRequest(string memory key) public view returns (TransportEntity memory){
        return transportRequests[key];
    }

    function getTransportRequestKeys() public view returns(string[] memory){
        return transportRequestKeys;
    }
}

//0xf68FAEF626F589f45Ca10fe214353C56B3ffa58b