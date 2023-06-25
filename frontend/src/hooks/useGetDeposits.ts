import { BigNumber } from 'ethers';
import { getAddress, parseUnits } from 'ethers/lib/utils.js';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useAddresses } from './useAddresses';
import { FetchBalanceResult } from '@wagmi/core';

export function useGetDeposits() {
  const { address } = useAccount();

  const addresses = useAddresses();
  const read = useContractRead({
    address: addresses.LoanContract.address,
    abi: addresses.LoanContract.abi,
    functionName: 'deposits',
    args: [address],
    enabled: true,
    watch: true,
  });

  return {
    ...read,
  };
}
