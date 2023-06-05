// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library ModelsStruct{

    struct RawMaterial{
        string id;
        string name;
        string description;
        uint256 timeStamp;
        string supplierId;
        string amount;
        string price;
    }

    struct SupplyEntity{
        string id;
        string supplierId;
        string toId;
        string name;
        string description;
        uint unitCount;
        string pricePerUnit;
    }

    struct TransportEntity{
        string id;
        string initDate;
        string completeDate;
        address transporter;
        address fromAddress;
        address toAddress;
        string fromUserId;
        string toUserId;
        string status;
        string cost;
        string fromLocation;
        string toLocation;
    }

    struct MedicineEntity{
        string id;
        string name;
        string manuDate;
        string expDate;
        bool fdaStatus;
        string manuLocation;
        string fdaAdminId;
        string price;
        uint count;
    }

    struct ManuRequestEntity{
        string id;
        string name;
        uint count;
        string date;
        string manuId;
        string supplierId;
        bool requestStatus;
    }

    struct FdaRequestEntity{
        address manuAddress;
        address fdaAddress;
        string status;
        string date;
    }
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