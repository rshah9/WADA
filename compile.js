const path = require('path');
const fs = require('fs');
const solc = require('solc');

const registrationPath = path.resolve(__dirname, 'contracts', 'registration.sol' );

const source = fs.readFileSync(registrationPath, 'utf8');

// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1);