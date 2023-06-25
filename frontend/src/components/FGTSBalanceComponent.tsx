import * as React from 'react';
import { useAsset } from '../hooks/useAsset';
import { getAddress } from 'viem';
import { useAccount, useBalance, useChainId, useToken } from 'wagmi';
import { currencyFormat } from '../utils/masks';

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
      <div className="font-normal text-[16px]">
        {currencyFormat(sFGTSBalance.data?.formatted)}
      </div>
    </>
  );
};

export default FGTSBalanceComponent;
