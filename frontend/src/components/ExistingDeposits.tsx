import * as React from 'react';
import { useGetDeposits } from '../hooks/useGetDeposits';
import { currencyFormat } from '../utils/masks';
import { formatEther } from 'viem';

const ExistingDeposits = () => {
  const deposits = useGetDeposits();
  const parsed = deposits.data?.toString();
  const formatted = parseFloat(parsed ?? '0') / 1e18;
  return (
    <div className="font-normal text-[16px]">
      {currencyFormat(formatted.toString())}
    </div>
  );
};

export default ExistingDeposits;
