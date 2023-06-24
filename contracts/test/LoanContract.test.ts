// test/loan-contract.test.ts

import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

describe("LoanContract", function () {
  let accounts: Signer[];
  let fgtsToken: Contract;
  let realDigitalToken: Contract;
  let loanContract: Contract;

  beforeEach(async function () {
    accounts = await ethers.getSigners();

    // Deploy FGTS_Token
    const FGTS_Token = await ethers.getContractFactory("FGTS_Token");
    fgtsToken = await FGTS_Token.deploy();
    await fgtsToken.deployed();

    // Deploy RealDigitalToken
    const RealDigitalToken = await ethers.getContractFactory("RealDigitalToken");
    realDigitalToken = await RealDigitalToken.deploy();
    await realDigitalToken.deployed();

    // Deploy LoanContract
    const LoanContract = await ethers.getContractFactory("LoanContract");
    loanContract = await LoanContract.deploy(fgtsToken.address, realDigitalToken.address);
    await loanContract.deployed();
  });

  it("should mint FGTS tokens, deposit them, and borrow RealDigital tokens", async function () {
    const initialFgtsBalance = ethers.utils.parseEther("100");
    const borrowAmount = ethers.utils.parseEther("75");

    // Mint some FGTS tokens
    await fgtsToken.mint(await accounts[0].getAddress(), initialFgtsBalance);

    // Mint some RealDigital tokens to LoanContract
    await realDigitalToken.mint(loanContract.address, ethers.utils.parseEther("1000000"));

    // Approve LoanContract to spend FGTS tokens
    await fgtsToken.connect(accounts[0]).approve(loanContract.address, initialFgtsBalance);

    // Check FGTS Token allowance
    const fgtsAllowance = await fgtsToken.allowance(await accounts[0].getAddress(), loanContract.address);
    expect(fgtsAllowance.toString()).to.equal(initialFgtsBalance.toString());

    // Transfer FGTS tokens to LoanContract
    await loanContract.connect(accounts[0]).deposit(initialFgtsBalance);

    // Approve LoanContract to spend RealDigital tokens
    await realDigitalToken.connect(accounts[0]).approve(loanContract.address, initialFgtsBalance);

    // Check RealDigital Token allowance
    const realDigitalAllowance = await realDigitalToken.allowance(await accounts[0].getAddress(), loanContract.address);
    expect(realDigitalAllowance.toString()).to.equal(initialFgtsBalance.toString());

    // Borrow RealDigital tokens from LoanContract
    await loanContract.connect(accounts[0]).borrow(borrowAmount);

    // Check the balances
    const fgtsBalance = await fgtsToken.balanceOf(loanContract.address);
    expect(fgtsBalance.toString()).to.equal(initialFgtsBalance.toString());

    const borrowedRealDigitalBalance = await realDigitalToken.balanceOf(await accounts[0].getAddress());
    expect(borrowedRealDigitalBalance.toString()).to.equal(borrowAmount.toString());
  });
});
