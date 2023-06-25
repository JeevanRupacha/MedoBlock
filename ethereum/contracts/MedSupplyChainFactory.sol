// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './MedSupplyChain.sol';
import './MedLibrary.sol';

contract MedSupplyChainFactory{
    MedSupplyChain[] public medSupplyChains;
    address[] public medSupplyChainAddresses;
    uint public supplyChainCount;

    function createMedSupplyChain() public{
        supplyChainCount += 1;
        MedSupplyChain newMedSupplyChain = new MedSupplyChain(supplyChainCount);
        address mAddress = address(newMedSupplyChain);
        medSupplyChains.push(newMedSupplyChain);
        medSupplyChainAddresses.push(mAddress);
    }

    function getAllAddresses() view public returns( address[] memory){
        return medSupplyChainAddresses;
    }

    function getLastSupplyChainAddr() view public returns(address){
        return medSupplyChainAddresses[supplyChainCount - 1]; // array index start 0 
    }
}

//0x31cC65373d27c3C93277a00CF6f48e04Bec4BA5e