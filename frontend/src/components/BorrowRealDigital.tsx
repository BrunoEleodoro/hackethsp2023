import * as React from 'react';
import { useDeposit } from '../hooks/useDeposit';
import { useAllowance } from '../hooks/useAllowance';
import { useApproval } from '../hooks/useApproval';
import { useAsset } from '../hooks/useAsset';
import { useAddresses } from '../hooks/useAddresses';
import { useAccount, useBalance } from 'wagmi';
import { getAddress } from 'viem';

const WithdrawRealDigital = () => {
  const [amount, setAmount] = React.useState('');
  const { address, isConnected } = useAccount();

  const fgtsAsset = useAsset('FGTS_Token');
  const addresses = useAddresses();
  const parsedAddress = getAddress(fgtsAsset);

  const fgtsBalance = useBalance({
    address: address,
    token: parsedAddress,
  });
  console.log('approve contract', addresses.LoanContract.address);
  const approve = useApproval(
    parsedAddress,
    addresses.LoanContract.address,
    amount,
    fgtsBalance.data
  );
  const allowance = useAllowance(
    getAddress(address),
    addresses.LoanContract.address,
    parsedAddress
  );
  console.log('allowance, ', allowance.data?.toString());
  const deposit = useDeposit(amount, fgtsBalance.data);

  //   const submit = (data: Inputs) => {
  //     console.log(data);
  //     seniorDeposit.write?.();
  //   };

  const parsedAmount = parseFloat(amount);
  const isAmountZero = parsedAmount <= 0 || isNaN(parsedAmount);
  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          className="border-2 border-gray-300 rounded-md p-2 text-black"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => approve?.approve?.()}
          disabled={isAmountZero || !isConnected}
        >
          Approve
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deposit.write?.()}
          disabled={isAmountZero || !isConnected}
        >
          Deposit
        </button>
      </div>
    </>
  );
};

export default WithdrawRealDigital;
