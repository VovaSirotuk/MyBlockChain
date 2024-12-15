const { BlockChain, Transaction } = require('./BlockChain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('5ec8257fa465cee4bd31bdf7506b27079da505916936dc16624ea8c6ab7b36bb');
const myWalletAddress = myKey.getPublic('hex');

let VovaCoin = new BlockChain();

VovaCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 10);
tx1.signTransaction(myKey);
VovaCoin.addTransaction(tx1);

VovaCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
VovaCoin.addTransaction(tx2);

VovaCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of VovaAddress is ' + VovaCoin.getBalanceOfAddress(myWalletAddress));

console.log('Blockchain valid?', VovaCoin.isValid() ? 'Yes' : 'No');

console.log(JSON.stringify(VovaCoin, null, 4));