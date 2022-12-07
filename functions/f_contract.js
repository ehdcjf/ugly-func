// const functions = require("firebase-functions");
const {privateKey, alchemyApiKey} = require('../config.js'); 


//ether
const ethers = require('ethers');
const BoxContarct = require('../artifacts/contracts/Box.sol/Box.json')

const provider = new ethers.providers.AlchemyProvider("goerli",alchemyApiKey)

const wallet = new ethers.Wallet(privateKey, provider);

async function test() {
        const Box = new ethers.Contract(BoxContarct.address, BoxContarct.abi, wallet);
        console.log(Box.signer)
        const value = await Box.retrieve();
        console.log(value.toString());
    };


    test();