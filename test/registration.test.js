const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3'); //Constructor function to create instance of Web3
const web3 = new Web3(ganache.provider()); //instance of web3 can change provider

class Car{
    park() {
        return'stopped';
    }

    drive(){
        return 'vroom';
    }
}

describe('Car', () => {
    it('test park funtion... can park', () => {
        const car = new Car();
    });
}); //for user to understand