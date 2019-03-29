pragma solidity ^0.4.4;

contract Registration {
    string public registrationNumber;

    constructor( string serialNumber ) public {
        registrationNumber = serialNumber;
    }

    function setRegistration( string newRegistration ) public {
        registrationNumber = newRegistration;
    }

    function getRegistration() public view returns (string) {
        return registrationNumber;
    }
}