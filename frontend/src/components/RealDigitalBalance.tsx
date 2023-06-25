import * as React from 'react';
import { useAsset } from '../hooks/useAsset';
import { getAddress } from 'viem';
import { useAccount, useBalance, useToken } from 'wagmi';
import { currencyFormat } from '../utils/masks';

const RealDigitalBalance = () => {
  const { address } = useAccount();
  const asset = useAsset('RealDigitalToken');

  const parsedAddress = getAddress(asset);
  const token = useToken({
    address: parsedAddress,
  });

  const realDigitalBalance = useBalance({
    address: address,
    token: parsedAddress,
    chainId: 137,
    enabled: true,
    watch: true,
  });
  console.log('balance real digital', parsedAddress, address);
  return <>{currencyFormat(realDigitalBalance.data?.formatted)}</>;
};

export default RealDigitalBalance;
