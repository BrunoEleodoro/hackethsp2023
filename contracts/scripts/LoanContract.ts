// scripts/deploy_loan_contract.ts

import { ethers, deployments } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const fgtsToken = await deployments.get("FGTS_Token");
    const realDigitalToken = await deployments.get("RealDigitalToken");

    const LoanContract = await ethers.getContractFactory("LoanContract");
    const loanContract = await LoanContract.deploy(fgtsToken.address, realDigitalToken.address);

    console.log("Loan Contract address:", loanContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
