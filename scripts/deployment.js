const { ethers, upgrades } = require("hardhat");


async function main() {
    const QSOLTOKEN = await ethers.getContractFactory("QSOLTOKEN");
    const qsolToken = await upgrades.deployProxy(QSOLTOKEN,[]);
    await qsolToken.deployed();
    console.log("QSOL Token deployed to:", qsolToken.address);
  }

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })