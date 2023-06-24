import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.4',
  },
  networks: {
    // Configuração da rede
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
