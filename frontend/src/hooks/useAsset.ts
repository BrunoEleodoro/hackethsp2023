import { getAddress } from 'ethers/lib/utils.js';
import { useNetwork } from 'wagmi';

const assets: Record<string, Record<string, string>> = {
  '80001': {
    FGTS_Token: '0xd30A07E994251cdB3855Cc4ab52443A3d0024756',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0x475Bb07102B0B5045c7E79f43ed62dDdC9b4E03E',
  },
  '31337': {
    FGTS_Token: '0xd30A07E994251cdB3855Cc4ab52443A3d0024756',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0x475Bb07102B0B5045c7E79f43ed62dDdC9b4E03E',
  },
  '1337': {
    FGTS_Token: '0xd30A07E994251cdB3855Cc4ab52443A3d0024756',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0x475Bb07102B0B5045c7E79f43ed62dDdC9b4E03E',
  },
  '137': {
    FGTS_Token: '0xd30A07E994251cdB3855Cc4ab52443A3d0024756',
    RealDigitalToken: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    LoanContract: '0x475Bb07102B0B5045c7E79f43ed62dDdC9b4E03E',
  },
};

export function useAsset(asset: string) {
  const network = useNetwork();
  // const chainId = network.chain?.id ?? '31337';
  // const chainId = '31337';
  const chainId = 137;
  return getAddress(assets[chainId][asset]);
}
