const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let registration;
let accounts;
const INITIAL_STRING = 'Hi There!!';

beforeEach(async() => {
    //get list of all accounts
    accounts = await web3.eth.getAccounts();
    console.log(`these are the accounts ${accounts}`);

    //use one account to deploy the contract
    registration = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_STRING] })
        .send({ from: accounts[0], gas:'1000000' }); //gas to use on contract
});

describe('Registration', () => {
    it('deploys the contract', () => {
        console.log(registration);
        assert.ok(registration.options.address); //assert std node lib. ok valids the value is there
    });
    //another test
    it('has a default registrationNumber', async () => {
        //contract prop methods, this receives our registrationNumber
        const registrationNumber = await registration.methods.registrationNumber().call();
        assert.equal(registrationNumber, INITIAL_STRING);
    });

    it('can change the message', async () => {
       await registration.methods.setRegistration('bye').send({ from: accounts[0] });
       const registrationNumber = await registration.methods.registrationNumber().call(); //contract prop methods, this receives our registrationNumber
        assert.equal(registrationNumber, 'bye');
    });
});