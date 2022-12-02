# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


# Install Hardhat

```shell
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts 
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install @openzeppelin/hardhat-upgrades
```

# Run (init)
```shell
npx hardhat
```

# Compile
```shell
npx hardhat compile
```

# Local Network
```shell
npx hardhat node
```

# Deploy Local Network
```shell
npx hardhat run --network localhost .\scripts\1_deploy_box.js
```

# Goerli Deploy
```shell
npx hardhat run --network goerli .\scripts\*.js
```

# Interacting from the Console
```shell
npx hardhat console --network localhost

const Box = await ethers.getContractFactory('Box');
const box = await Box.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3')
await box.store(42)
(await box.retrieve()).toString()
```


# Test
```shell
npm install --save-dev chai
npm install --save-dev @openzeppelin/test-helpers

npx hardhat test
```

# Firebase Emulator Start
```shell
firebase emulators:start
```