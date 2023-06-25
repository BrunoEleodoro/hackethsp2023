import * as React from 'react';
import { useAsset } from '../hooks/useAsset';
import { getAddress } from 'viem';
import { useAccount, useBalance, useChainId, useToken } from 'wagmi';

const FGTSBalanceComponent = () => {
  const { address } = useAccount();
  const asset = useAsset('FGTS_Token');
  const chainId = useChainId();

  const parsedAddress = getAddress(asset);
  const token = useToken({
    address: parsedAddress,
  });

  const sFGTSBalance = useBalance({
    address: address,
    token: parsedAddress,
    chainId: 137,
    enabled: true,
    watch: true,
  });
  console.log('balance fgts token', chainId, parsedAddress, address);
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="border-2 border-gray-300 rounded-md p-2 text-white">
          FGTS: {sFGTSBalance.data?.formatted}
        </div>
      </div>
    </>
  );
};

export default FGTSBalanceComponent;
