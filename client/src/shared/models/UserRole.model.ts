enum UserRole{
    MANUFACTURER = "Manufacturer",
    SUPPLIER = "Supplier",
    CARRIER = "Carrier",
    RETAILER = "Retailer",
    CUSTOMER = "Customer",
    FDA_ADMIN= "FDA_Admin",
    NONE = "None"
};

export type UserRoleType = 
| "Customer"
| "Supplier"
| "None"   
| "Manufacturer"   
| "Carrier"   
| "Customer" 
| "FDA Admin" 

export default UserRole;