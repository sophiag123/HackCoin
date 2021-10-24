const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c1ac4c207e029741416f91040fa6bcbc8a463dfe7014888c08071432bcf10322');
const myWalletAddress = myKey.getPublic('hex');

let HackCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1signTransaction(myKey);
HackCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
HackCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of gao is', HackCoin.getBalanceOfAddress(myWalletAddress));