pragma solidity ^0.4.4;

contract Registration {
    int public registrationNumber;

    function Registration( int serialNumber ) public {
        registrationNumber = serialNumber;
    }

    function setRegistration ( int newRegistration ) public {
        registrationNumber = newRegistration;
    }
}