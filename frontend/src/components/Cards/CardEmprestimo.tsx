import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatEther, getAddress } from 'viem';
import { useAccount, useBalance } from 'wagmi';
import { useAddresses } from '../../hooks/useAddresses';
import { useAsset } from '../../hooks/useAsset';
import { useBorrow } from '../../hooks/useBorrow';
import { useGetDeposits } from '../../hooks/useGetDeposits';
import { currencyFormat } from '../../utils/masks';
import RealDigitalBalance from '../RealDigitalBalance';
import FGTSBalanceComponent from '../FGTSBalanceComponent';

const CardEmprestimo: React.FC = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = React.useState<number>(0);
  const { address, isConnected } = useAccount();

  const realDigital = useAsset('RealDigitalToken');
  const addresses = useAddresses();
  const parsedAddress = getAddress(realDigital);

  const realDigitalBalance = useBalance({
    address: address,
    token: parsedAddress,
  });

  const borrow = useBorrow(amount.toString(), realDigitalBalance.data);
  const deposits = useGetDeposits();

  const parsedAmount = parseFloat(amount.toString());
  const isAmountZero = parsedAmount <= 0 || isNaN(parsedAmount);
  const depositedAmount = deposits.data?.toString();
  const depositedAmountFloat = parseFloat(depositedAmount ?? '0') / 1e18;

  const only75Percent = 0.75 * depositedAmountFloat;

  const summedAmount =
    amount + parseFloat(realDigitalBalance.data?.formatted ?? '1');

  return (
    <div className="bg-[#21253D] flex flex-col rounded-t-3xl space-y-2 border-[1px] border-current">
      <div className="flex flex-col p-2 border-b-[1px] border-current">
        <div className="flex flex-row justify-between">
          <div className="text-[16px] font-normal">Your supplies</div>
          <div className="text-[16px] font-normal">Hide --</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            Balance <RealDigitalBalance />
          </div>
          <div className="border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            APY 0.20%
          </div>
          <div className="flex  justify-center items-center  border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            FGTS:
            <FGTSBalanceComponent />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <input
          type="number"
          className="rounded-md text-[16px] h-10 text-black p-2"
          onChange={(e) => {
            if (isNaN(e.target.valueAsNumber)) {
              setAmount(0);
            } else {
              setAmount(e.target.valueAsNumber ?? 0);
            }
          }}
        ></input>

        {summedAmount > only75Percent && (
          <div className="text-[22px] text-center text-red-500">
            Você não pode pegar empréstimo acima de 75% do valor depositado
          </div>
        )}
        {summedAmount < only75Percent && (
          <div className="flex flex-row">
            <button
              className="text-[16px] text-semibold rounded-full bg-primary w-full py-2"
              onClick={() => borrow.write?.()}
            >
              Pegar empréstimo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardEmprestimo;
