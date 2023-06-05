// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './Supplier.sol';
// import './Transporter.sol';
// import './Manufacturer.sol';
// import './FdaAdmin.sol';
// import './Retailer.sol';
// import './Customer.sol';

contract MedSupplyChain{

    uint public idCount; //unqiue id and count as well  

    // supplier  -> Transporter -> Manufacturer -> Fda Admin -> Retailer -> Customer 
    Supplier public supplier; 
    // Transporter public transporter;
    // Manufacturer public manufacturer;
    // FdaAdmin public fdaAdmin;
    // Retailer public retailer;
    // Customer public customer;  

    constructor(uint _idCount){
        idCount = _idCount; 
    }

    function createSupplier() public{
        supplier = new Supplier();
    }

    // function createTransporter() public{
    //     transporter = new Transporter();
    // }

    // function createManufacturer() public{
    //     manufacturer = new Manufacturer();
    // }

    // function createFdaAdmin() public{
    //     fdaAdmin = new FdaAdmin();
    // }

    // function createRetailer() public{
    //     retailer = new Retailer();
    // }

    // function createCustomer() public{
    //     customer = new Customer();
    // }
}