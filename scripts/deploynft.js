const { ethers, upgrades } = require("hardhat");


async function main() {
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await upgrades.deployProxy(NFT);
    await nft.deployed();
  
    // Log the deployed contract's address to the console
    console.log("NFT contract deployed to:", nft.address);
  }

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })