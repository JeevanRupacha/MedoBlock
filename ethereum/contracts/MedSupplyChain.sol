// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedLibrary.sol';

contract MedSupplyChain{
    uint public idCount;
    uint256 public timeStamp;

    mapping (string => string) public supplyChain;
    string[] public supplyChainKeys;

    constructor(uint _idCount){
        idCount = _idCount; 
        timeStamp = block.timestamp;
    }

    function addSupplyChain(string memory chainType, string memory data) public {
        supplyChainKeys.push(chainType);
        supplyChain[chainType] = data;
    }

    function getSupplyChainKeys() view public returns(string[] memory){
        return supplyChainKeys;
    }

    function getSupplyChain(string memory chainType) view public returns (string memory){
        return supplyChain[chainType];
    }

    //0xf8e81D47203A594245E36C48e151709F0C19fBe8
}