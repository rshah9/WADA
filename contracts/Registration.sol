pragma solidity ^0.4.4;

contract Registration {
    string public registrationNumber;

    function Registration( string serialNumber ) public {
        registrationNumber = serialNumber;
    }

    function setRegistration( string newRegistration ) public {
        registrationNumber = newRegistration;
    }

    //TODO: refactor this function if needed at all? If yes get from where?
    function getRegistration() public view returns (string) {
        return registrationNumber;
    }
}