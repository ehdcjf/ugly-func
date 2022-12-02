require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const {alchemyApiKey, privateKey, klaytnPrivateKey,klaytnUrl } = require('./config');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
    //   accounts: [privateKey,]
    // }
    klaytn: {
      url: klaytnUrl || "",
      accounts: klaytnPrivateKey !== undefined ? [klaytnPrivateKey] : [],
    },
  },
  solidity: "0.8.17",
};
