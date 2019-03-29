const path = require('path'); //generate valid path
const fs = require('fs');
const solc = require('solc'); //solidity compiler

const registrationPath = path.resolve(__dirname, 'contracts', 'Registration.sol');
const source = fs.readFileSync(registrationPath, 'utf8');

//this will make sure we can use require statement has access to our compile source code
module.exports = solc.compile(source, 1).contracts[':Registration'];



console.log(solc.compile(source, 1));
