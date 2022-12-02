// const functions = require("firebase-functions");

//config
const {klaytnPrivateKey, klaytnPublicKey, klaytnUrl} = require('../config');
const BoxContarct = require("../artifacts/contracts/Box.sol/Box.json");


//caver
const Caver = require('caver-js');


async function test() {   
    const caver = new Caver(klaytnUrl);
    const balance = await caver.klay.getBalance(klaytnPublicKey);
    console.log(balance);
    const version = await caver.rpc.klay.getClientVersion();
    console.log(version);
    const BoxContractAddress = "0x2Ec33f45C01Ade9a98a442DA011d64C467A4e62C"; 
    const Box = new caver.klay.Contract(BoxContarct.abi,BoxContractAddress,{
        gasPrice:'25000000000'
    });

    caver.klay.accounts.wallet.add({
        address: klaytnPublicKey,
        privateKey: klaytnPrivateKey
    });
    
    const value = await Box.call('retrieve');
    console.log(value)
}

test();
    