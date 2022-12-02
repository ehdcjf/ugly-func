// const functions = require("firebase-functions");
const dotenv = require('dotenv');
dotenv.config();


//ether
const ethers = require('ethers');
const BoxContarct = require('../contracts/Box.json')

const provider = ethers.providers.AlchemyProvider("goerli",)

const privateKey = process.env.PRIVATE_KEY
const wallet = new ethers.Wallet(privateKey, provider);

(async function() {
        const Box = new ethers.Contract(BoxContarct.address, BoxContarct.abi, provider);
        
        const value = await Box.retrieve();
        console.log(value);

    })();