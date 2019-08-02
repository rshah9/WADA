pragma solidity ^0.4.4;
import './Registration.sol';

contract Unify {

    //TODO change the strings to appropriate bytes for efficiency
    string buyerId;

    Registration armsId; //from registration

    function getArmsId(string _armsId){
        require(_armsId);
    }

    function setUnifiedId(string _armsId, string _buyerId ) public {
        if(_armsId != undefined && _buyerId  != undefined){
            string currentOwner = _armsId + _buyerId;
            return currentOwner;
        }
    }
}