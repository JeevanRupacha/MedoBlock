// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract RawMaterialRequest{
    mapping(string => ManuRequestEntity) public requests;
    string[] public requestKeys;

    function addRequest(
        string memory _id,
        string memory _name,
        uint _count,
        string memory _date,
        string memory _manuId,
        string memory _supplierId,
        string memory _rawMaterialId,
        bool _requestStatus,
        address _medSupplyChainAddr
    ) public {
        requestKeys.push(_id);
        ManuRequestEntity memory request = ManuRequestEntity({
            id: _id,
            name: _name,
            supplierId: _supplierId,
            rawMaterialId: _rawMaterialId,
            count: _count,
            date: _date,
            manuId: _manuId,
            requestStatus: _requestStatus,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        requests[_id] = request;
    }

    function updateRequest(
        string memory _id,
        string memory _name,
        uint _count,
        string memory _date,
        string memory _manuId,
        string memory _supplierId,
        string memory _rawMaterialId,
        bool _requestStatus,
        address _medSupplyChainAddr
    ) public {
        //require(requests[_id].id != '', "Raw material does not exist.");
        
         ManuRequestEntity memory request = ManuRequestEntity({
            id: _id,
            name: _name,
            supplierId: _supplierId,
            rawMaterialId: _rawMaterialId,
            count: _count,
            date: _date,
            manuId: _manuId,
            requestStatus: _requestStatus,
            medSupplyChainAddr: _medSupplyChainAddr
        });
        requests[_id] = request;
    }

    function getRequest(string memory key) public view returns (ManuRequestEntity memory){
        return requests[key];
    }

    function getRequestKeys() public view returns(string[] memory){
        return requestKeys;
    }
}

//0xbdE03e881da3825F8b63A99ac23BeD4F3EC2217B