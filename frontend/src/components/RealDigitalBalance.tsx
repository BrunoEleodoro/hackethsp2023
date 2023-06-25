import * as React from 'react';
import { useAsset } from '../hooks/useAsset';
import { getAddress } from 'viem';
import { useAccount, useBalance, useToken } from 'wagmi';

const RealDigitalBalance = () => {
  const { address } = useAccount();
  const asset = useAsset('RealDigitalToken');

  const parsedAddress = getAddress(asset);
  const token = useToken({
    address: parsedAddress,
  });

  const realDigitalBalance = useBalance({
    address: address,
    token: '0x63A7f12c00c7a4193dB207EAB92922D1e45F74D4',
    chainId: 137,
    enabled: true,
    watch: true,
  });
  console.log('balance real digital', parsedAddress, address);
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="border-2 border-gray-300 rounded-md p-2 text-white">
          Real Digital :{realDigitalBalance.data?.formatted}
        </div>
      </div>
    </>
  );
};

export default RealDigitalBalance;
