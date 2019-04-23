const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//deploy contract to Rinkby network
const provider = new HDWalletProvider(
    'range crouch bronze flat exercise soda taxi plug twice skull lady century',
    'https://rinkeby.infura.io/v3/40eb38eccfca4ec3adfd61f3e0b4814d'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    // console.log(`available accounts for deployment ${ accounts }`);
    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there! ']})
        .send({ gas: '5000000', from: accounts[0]});
        // .send({ from: accounts[0]});

    console.log('contract deployed to', result.options.address);
};

deploy();