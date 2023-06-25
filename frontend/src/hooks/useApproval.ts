import { BigNumber } from 'ethers';
import { parseUnits, getAddress } from 'ethers/lib/utils.js';
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useToken,
  useWaitForTransaction,
} from 'wagmi';
import { erc20ABI, FetchBalanceResult } from '@wagmi/core';
import { useEffect, useState } from 'react';

export function useApproval(
  token: Address,
  spender: Address,
  amount: string,
  asset?: FetchBalanceResult
) {
  const [finished, setFinished] = useState(false);
  const amountNumber = parseUnits(amount ? amount : '0', asset?.decimals);
  console.log(
    'approval',
    token,
    spender,
    amount,
    asset?.symbol,
    asset?.decimals,
    amountNumber,
    amountNumber.toString()
  );
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: 'approve',
    args: [spender, amountNumber],
    enabled: amountNumber.gt(0),
  });

  const { data, error, isError, isLoading, isSuccess, write, status } =
    useContractWrite(config);

  const {
    isLoading: isLoadingWaitForTransaction,
    isSuccess: isSuccessWaitForTransaction,
  } = useWaitForTransaction({
    hash: data?.hash,
    confirmations: 2,
  });

  useEffect(() => {
    if (isSuccessWaitForTransaction) {
      setFinished(true);
    }
  }, [isSuccessWaitForTransaction]);

  return {
    approve: write,
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
    finished,
  };
}
