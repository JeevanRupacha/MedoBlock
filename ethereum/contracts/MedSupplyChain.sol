// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract MedSupplyChain{
    uint public idCount;
    uint256 public timeStamp;

    mapping (string => string) public supplyChain;

    constructor(uint _idCount){
        idCount = _idCount; 
        timeStamp = block.timestamp;
    }

    function addSupplyChain(string memory chainType, string memory data) public {
        supplyChain[chainType] = data;
    }
}