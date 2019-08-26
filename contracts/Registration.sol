pragma solidity ^0.4.4;
//TODO update the solidity version

contract Registration {
    string public registrationNumber;

    function Registration( string serialNumber ) public {
        registrationNumber = serialNumber;
    }

    function setRegistration( string newRegistration ) public {
        registrationNumber = newRegistration;
    }

    //TODO: refactor this "registration"
    function getRegistration() public view returns (string) {
        return registrationNumber;
    }
}