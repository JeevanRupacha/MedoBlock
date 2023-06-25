// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


struct SupplyEntity{
    string id;
    string supplierId;
    string RawMaterialId;
    string toId;
    string name;
    uint unitCount;
    string pricePerUnit;
    address medSupplyChainAddr;
}

struct TransportEntity{
    string id;
    string initDate;
    string completeDate;
    string transporterId;
    string fromUserId;
    string toUserId;
    string status;
    string cost;
    string fromLocation;
    string toLocation;
    address medSupplyChainAddr;
}

struct MedicineEntity{
    string id;
    string name;
    string description;
    string manuId;
    uint manuDate;
    string expDate;
    string fdaStatus;
    string fdaAdminId;
    string price;
    uint count;
    address medSupplyChainAddr;
}

struct ManuRequestEntity{
    string id;
    string name;
    uint count;
    string date;
    string manuId;
    string supplierId;
    string rawMaterialId;
    bool requestStatus;
    address medSupplyChainAddr;
}

struct FdaRequestEntity{
    address manuAddress;
    address fdaAddress;
    string manuId;
    string adminId;
    string status;
    string date;
    address medSupplyChainAddr;
}

struct RawMaterial{
    string id;
    string name;
    string description;
    uint256 timeStamp;
    string supplierId;
    string amount;
    string price;
    string unit; //new 
}

enum UserRole{
    SUPPLIER,
    TRANSPORTER,
    MANUFACTURER,
    FDA_ADMIN,
    RETAILER,
    CUSTOMER
}

enum TransportStatus{
    REQUEST,
    ACCEPTED,
    ON_WAY,
    COMPLETED,
    FAILED
}