import * as React from 'react';
import { useDeposit } from '../hooks/useDeposit';
import { useAllowance } from '../hooks/useAllowance';
import { useApproval } from '../hooks/useApproval';
import { useAsset } from '../hooks/useAsset';
import { useAddresses } from '../hooks/useAddresses';
import { useAccount, useBalance } from 'wagmi';
import { getAddress } from 'viem';
import { useBorrow } from '../hooks/useBorrow';

const BorrowRealDigital = () => {
  const [amount, setAmount] = React.useState('');
  const { address, isConnected } = useAccount();

  const realDigital = useAsset('RealDigitalToken');
  const addresses = useAddresses();
  const parsedAddress = getAddress(realDigital);

  const realDigitalBalance = useBalance({
    address: address,
    token: parsedAddress,
  });

  const borrow = useBorrow(amount, realDigitalBalance.data);

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
          onClick={() => borrow.write?.()}
          disabled={isAmountZero || !isConnected}
        >
          Borrow
        </button>
      </div>
    </>
  );
};

export default BorrowRealDigital;
