import { useNetwork } from 'wagmi';
import addresses from '../contracts/addresses.json';

export function useAddresses() {
  const { chain } = useNetwork();
  // const chainId = 31337;
  const chainId = 137;
  // const chainId: string = chain?.id ? chain!.id.toString() : '31337';
  return (addresses as any)[chainId][0].contracts;
}
