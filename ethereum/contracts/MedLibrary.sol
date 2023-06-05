// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library ModelsStruct{
    struct RawMaterial{
        string id;
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
        UserRole fromUser;
        UserRole toUser;
        TransportStatus status;
        string cost;
        string fromLocation;
        string toLocation;
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