// import { ethers } from "hardhat";

const hre = require('hardhat')
const ethers = hre.ethers;

async function deployElectionContract() {
  await hre.run('compile'); // We are compiling the contracts using subtask
    const [deployer] = await ethers.getSigners(); // We are getting the deployer
  
    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const USElection = await ethers.getContractFactory("USElection"); // 
    const usElectionContract = await USElection.deploy();
    console.log('Waiting for USElection deployment...');
    await usElectionContract.deployed();

    console.log('USElection Contract address: ', usElectionContract.address);
    console.log('Done!');

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployElectionContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

module.exports = deployElectionContract;