// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.19;

contract DecentralizedTaxi{
    string public name = "DTaxi App";
    address public owner;

    struct Customer{
        uint id;
        bool ride_status;
        address payable cust_wallet;
    }
    struct Driver{
        uint id;
        uint numberOfRides;
        bool drive_status;
        address payable driver_wallet;
    }
    uint256 public totalCustomers = 0;
    uint256 public totalDrivers = 0;

    mapping(uint => Driver) public drivers;
    mapping(uint => Customer) public customers;
    mapping(address => uint) public driverIDs;
    mapping(address => uint) public customerIDs;

    event CustomerCreated(uint id, address wallet);
    event DriverCreated(uint id, address payable wallet);
    event CabRequested(uint customerId, bool status);
    event CabAccepted(uint customerId, uint driverId, uint price);
    event CabCancelled(uint customerId);

    constructor() public{
        owner = msg.sender;
    }

    function createCustomer() public {
        require(customerIDs[msg.sender] == 0, "Customer already registered");
        totalCustomers++;
        customerIDs[msg.sender] = totalCustomers;
        customers[totalCustomers] = Customer(totalCustomers, false, msg.sender);
        emit CustomerCreated(totalCustomers,msg.sender);
    }

    function createDriver() public {
        require(driverIDs[msg.sender] == 0, "Driver already registered");
        totalDrivers++;
        driverIDs[msg.sender] = totalDrivers;
        drivers[totalDrivers] = Driver(totalDrivers, 0, false, msg.sender);
        emit DriverCreated(totalDrivers,msg.sender);
    }

    function requestRide(uint _customerId) public {
        require(_customerId >= 1 && _customerId <= totalCustomers, "Invalid Customer ID");
        Customer storage cust = customers[_customerId];
        require(cust.ride_status ==false,"Customer needs to be available");
        cust.ride_status = true;
        emit CabRequested(_customerId, cust.ride_status);
    }

    function acceptRide(uint _customerId, uint driverId, uint price) public payable {
        require(price >= 1 ether, "Minimum price is 1 Ether");
        require(msg.value == price, "Incorrect value sent");
        //required drive status==0 & customer status==1
        
        Customer storage cust = customers[_customerId];
        Driver storage driver = drivers[driverId];

        require(cust.ride_status == true, "Customer must be waiting for a taxi");
        require(driver.drive_status ==false, "Driver must be available");
        require(cust.cust_wallet != driver.driver_wallet, "Customer and driver cannot be same");

        cust.ride_status = false;
        driver.numberOfRides++;
        driver.driver_wallet.transfer(msg.value);

        emit CabAccepted(_customerId, driverId, price);
    }

    function cancelRide(uint _customerId) public {
        Customer storage cust = customers[_customerId];
        require(cust.ride_status==true,"Cannot cancel after accepting ride");
        cust.ride_status=false;
        emit CabCancelled(_customerId);
    }
    //Fix the cancelRide function to allow cancelation only before ride is accepted.
}