import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-deploy';
import dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY || '';

const config = {
  solidity: {
    version: '0.8.0',
  },
  networks: {
    hardhat: {},
    polygonMumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      chainId: 80001,
      accounts: [privateKey],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  }
};


export default config;
