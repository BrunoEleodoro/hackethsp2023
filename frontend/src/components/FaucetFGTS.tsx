import * as React from 'react';
import { useFaucet } from '../hooks/useFaucet';
import { useAddresses } from '../hooks/useAddresses';
import { useAsset } from '../hooks/useAsset';
import { useAccount, useBalance } from 'wagmi';
import { getAddress } from 'viem';

const FaucetFGTS = () => {
  const [amount, setAmount] = React.useState('');
  const { address, isConnected } = useAccount();

  const fgts = useAsset('FGTS_Token');
  const addresses = useAddresses();
  const parsedAddress = getAddress(fgts);
  const fgtsBalance = useBalance({
    address: address,
    token: parsedAddress,
  });
  const faucet = useFaucet(address ?? '', fgtsBalance.data);

  const parsedAmount = parseFloat(amount);
  const isAmountZero = parsedAmount <= 0 || isNaN(parsedAmount);
  return (
    <>
      <div className="flex flex-row gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => faucet.write?.()}
          //   disabled={isAmountZero || !isConnected}
        >
          Faucet
        </button>
      </div>
    </>
  );
};

export default FaucetFGTS;
