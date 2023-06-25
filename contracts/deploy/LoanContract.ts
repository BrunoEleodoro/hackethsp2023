// scripts/deploy_loan_contract.ts

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre;
  const { deploy, get } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log("Deploying LoanContract with the account:", deployer);

  const fgtsTokenDeployment = await get("FGTS_Token");
  const realDigitalTokenDeployment = await get("RealDigitalToken");

  const RealDigitalToken = await ethers.getContractAt("RealDigitalToken", realDigitalTokenDeployment.address);
  const loanContract = await deploy("LoanContract", {
    from: deployer,
    args: [fgtsTokenDeployment.address, realDigitalTokenDeployment.address],
    log: true,
  });

  await RealDigitalToken.connect(await ethers.getSigner(deployer)).mint(loanContract.address, ethers.utils.parseEther("10000000"));

  console.log("LoanContract deployed!");
  console.log("Loan Contract address:", loanContract.address);
};
deployFunction.tags = ["LoanContract"];
deployFunction.dependencies = ["FGTS_Token", "RealDigitalToken"];

export default deployFunction;
