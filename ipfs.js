const  IPFS = require('ipfs-mini');
const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});

const data = 'This is test Data sent to IPFS';

ipfs.add(data, (err, hash) => {
    if (err) {
        console.log('there is an error ' + err);
    }
    console.log('https://infura.io/ipfs/' + hash);
    console.log(data);
});