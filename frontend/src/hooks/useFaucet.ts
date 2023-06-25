import { ethers } from 'ethers';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useAddresses } from './useAddresses';

export function useFaucet(address: string) {
  const addresses = useAddresses();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addresses.FGTS_Token.address,
    abi: addresses.FGTS_Token.abi,
    functionName: 'faucet',
    args: [address, ethers.utils.parseEther('1000').toString()],
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
