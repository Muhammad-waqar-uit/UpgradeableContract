const { ethers, upgrades } = require("hardhat");
const { deployProxy } = require('@openzeppelin/hardhat-upgrades');
async function main() {
    const [Deployer]=await ethers.getSigners();
    console.log("Deployer Contract Address:",Deployer.address);
    const QSOLTOKEN = await ethers.getContractFactory("QSOLTOKEN");
    const qsolToken = await upgrades.deployProxy(QSOLTOKEN,[],{ initializer: 'initialize' });
    await qsolToken.deployed();
    console.log("QSOL Token deployed to:", qsolToken.address);
    saveFrontendFiles(qsolToken,"QSOLTOKEN");
  }
  function saveFrontendFiles(contract, name) {
    const fs = require("fs");
    const contractsDir = `${__dirname}/../contractsData`;
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    const addressFilePath = `${contractsDir}/${name}-address.json`;
    const artifactFilePath = `${contractsDir}/${name}.json`;
  
    fs.writeFileSync(
      addressFilePath,
      JSON.stringify({ address: contract.address }, null, 2)
    );
  
    const contractArtifact = artifacts.readArtifactSync(name);
  
    fs.writeFileSync(
      artifactFilePath,
      JSON.stringify(contractArtifact, null, 2)
    );
  }
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })


