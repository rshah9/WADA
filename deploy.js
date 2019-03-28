const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//deploy contract to Rinkby network
const provider = new HDWalletProvider(
    'notable lift trip student split mutual now filter prison recycle have diary',
    'https://rinkeby.infura.io/v3/34de293409cf4c58b8b13350876f9a02'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there! ']})
        .send({ gas: '1000000', from: accounts[0]});
        // .send({ from: accounts[0]});

    console.log('contract deployed to', result.options.address);
};

deploy();