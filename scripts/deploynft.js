const { ethers, upgrades } = require("hardhat");


async function main() {
    const [Deployer]=await ethers.getSigners();
    console.log("Deployer Contract Address:",Deployer.address);
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await upgrades.deployProxy(NFT,[],{ initializer: 'initialize' });
    await nft.deployed();
    // Log the deployed contract's address to the console
    console.log("NFT contract deployed to:", nft.address);
    saveFrontendFiles(nft,"NFT");
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