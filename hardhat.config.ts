import { HardhatUserConfig, subtask, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity:{
    version: "0.8.17",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  } 
 
};

export default config;

task("deploy-testnets", "Deploys contract on a provided network")
    .setAction(async () => {
        const deployElectionContract = require("./scripts/deploy");
        await deployElectionContract();
    });

subtask("print", "Prints a message")
    .addParam("message", "The message to print")
    .setAction(async (taskArgs) => {
      console.log(taskArgs.message);
    });