// scripts/deploy_fgts_token.ts

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log("Deploying FGTS Token contract with the account:", deployer);

  await deploy("FGTS_Token", {
    from: deployer,
    log: true,
  });

  console.log("FGTS Token contract deployed!");

  const fgtsTokenDeployment = await get("FGTS_Token");
  const fgtsToken = await ethers.getContractAt("FGTS_Token", fgtsTokenDeployment.address);

  console.log("FGTS Token address:", fgtsToken.address);
};
deployFunction.tags = ["FGTS_Token"];

export default deployFunction;
