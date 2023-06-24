import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.0',
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: 'https://rpc-mumbai.matic.today', // Replace with the correct RPC endpoint for Polygon Mumbai
      accounts: ['PRIVATE_KEY'], // Replace with the private key of your deployer account
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
