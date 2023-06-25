import { BigNumber } from 'ethers';
import { getAddress, parseUnits } from 'ethers/lib/utils.js';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useAddresses } from './useAddresses';
import { FetchBalanceResult } from '@wagmi/core';

export function useDeposit(amount: string, asset?: FetchBalanceResult) {
  console.log('decimals', asset?.decimals, asset?.symbol);
  const amountNumber = parseUnits(amount ? amount : '0', asset?.decimals);

  const addresses = useAddresses();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addresses.LoanContract.address,
    abi: addresses.LoanContract.abi,
    functionName: 'deposit',
    args: [amountNumber.toString()],
    enabled: amountNumber.gt(0),
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
