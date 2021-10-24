const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4eacaf97efdb029c19811c8844a2848bbd9509ae0ad6f07320d29a71a41ca6da');
const myWalletAddress = myKey.getPublic('hex');

let HackCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
HackCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
HackCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of gao is', HackCoin.getBalanceOfAddress(myWalletAddress));