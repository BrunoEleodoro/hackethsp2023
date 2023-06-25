import * as React from 'react';
import { getAddress } from 'viem';
import { useAccount, useBalance } from 'wagmi';
import { useAddresses } from '../hooks/useAddresses';
import { useAsset } from '../hooks/useAsset';
import { useFaucet } from '../hooks/useFaucet';

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
  const faucet = useFaucet(address ?? '');

  return (
    <>
      <div className="flex flex-row gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => faucet.write?.()}
          //   disabled={isAmountZero || !isConnected}
        >
          Faucet FGTS
        </button>
      </div>
    </>
  );
};

export default FaucetFGTS;
