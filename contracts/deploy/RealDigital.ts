// scripts/deploy_realdigital_token.ts

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre;
  const { deploy, get } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log("Deploying RealDigital Token contract with the account:", deployer);

  await deploy("RealDigitalToken", {
    from: deployer,
    log: true,
  });

  console.log("RealDigital Token contract deployed!");

  const realDigitalTokenDeployment = await get("RealDigitalToken");
  const realDigitalToken = await ethers.getContractAt("RealDigitalToken", realDigitalTokenDeployment.address);

  console.log("RealDigital Token address:", realDigitalToken.address);
};
deployFunction.tags = ["RealDigitalToken"];

export default deployFunction;
