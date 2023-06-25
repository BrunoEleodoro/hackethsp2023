import { BigNumber, ethers } from 'ethers';
import { getAddress, parseUnits } from 'ethers/lib/utils.js';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useAddresses } from './useAddresses';
import { FetchBalanceResult } from '@wagmi/core';
import { parseEther } from 'viem';

export function useFaucet(address: string, asset?: FetchBalanceResult) {
  console.log('decimals', asset?.decimals, asset?.symbol);

  const addresses = useAddresses();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addresses.FGTS_Token.address,
    abi: addresses.FGTS_Token.abi,
    functionName: 'faucet',
    args: [address, ethers.utils.parseEther('1000')],
  });

  const { data, error, isError, write, isLoading, isSuccess, status } =
    useContractWrite(config);

  const {
    isLoading: isLoadingWaitForTransaction,
    isSuccess: isSuccessWaitForTransaction,
  } = useWaitForTransaction({
    hash: data?.hash,
    confirmations: 2,
  });

  return {
    write,
    error,
    data,
    isError,
    isLoading,
    isSuccess,
    config,
    prepareError,
    isPrepareError,
    isLoadingWaitForTransaction,
    isSuccessWaitForTransaction,
    status,
  };
}
