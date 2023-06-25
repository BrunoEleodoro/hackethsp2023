import { getAddress } from 'ethers/lib/utils.js';
import { useNetwork } from 'wagmi';

const assets: Record<string, Record<string, string>> = {
  '80001': {
    FGTS_Token: '0xC82758829Da0D42DFe830AeF5B1B1f670aE630d0',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0xEf62aCF10E412CEFCf7e92686ec3AcE541a46CFA',
  },
  '31337': {
    FGTS_Token: '0xC82758829Da0D42DFe830AeF5B1B1f670aE630d0',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0xEf62aCF10E412CEFCf7e92686ec3AcE541a46CFA',
  },
  '1337': {
    FGTS_Token: '0xC82758829Da0D42DFe830AeF5B1B1f670aE630d0',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0xEf62aCF10E412CEFCf7e92686ec3AcE541a46CFA',
  },
  '137': {
    FGTS_Token: '0xC82758829Da0D42DFe830AeF5B1B1f670aE630d0',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0xEf62aCF10E412CEFCf7e92686ec3AcE541a46CFA',
  },
};

export function useAsset(asset: string) {
  const network = useNetwork();
  // const chainId = network.chain?.id ?? '31337';
  const chainId = '31337';
  return getAddress(assets[chainId][asset]);
}
