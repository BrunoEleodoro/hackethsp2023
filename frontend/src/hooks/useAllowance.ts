import { Address, erc20ABI, useContractRead } from 'wagmi';

export function useAllowance(
  account: Address,
  spender: Address,
  token: Address
) {
  const read = useContractRead({
    address: token,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [account, spender],
    enabled: true,
    watch: true,
  });

  return read;
}
