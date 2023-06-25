import * as React from 'react';
import { useDeposit } from '../hooks/useDeposit';
import { useAllowance } from '../hooks/useAllowance';
import { useApproval } from '../hooks/useApproval';
import { useAsset } from '../hooks/useAsset';
import { useAddresses } from '../hooks/useAddresses';
import { useAccount, useBalance } from 'wagmi';
import { getAddress } from 'viem';
import { useNavigate, useParams } from 'react-router-dom';
const DepositComponent = () => {
  const [amount, setAmount] = React.useState('');
  const navigate = useNavigate();
  const params = useParams();
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
    getAddress(address ?? ''),
    addresses.LoanContract.address,
    parsedAddress
  );
  console.log('allowance, ', allowance.data?.toString());
  const deposit = useDeposit(amount, fgtsBalance.data);

  //   const submit = (data: Inputs) => {
  //     console.log(data);
  //     seniorDeposit.write?.();
  //   };

  React.useEffect(() => {
    if (deposit.isSuccess) {
      navigate(`/status/${params.name}`);
    }
  }, [deposit.isSuccess]);

  const parsedAmount = parseFloat(amount);
  const isAmountZero = parsedAmount <= 0 || isNaN(parsedAmount);
  return (
    <>
      <div className="flex flex-row">
        <input
          className="rounded-md w-full text-[16px] h-10 text-black p-2 my-3"
          type="number"
          placeholder="Quantidade"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row">
        {approve.isLoading && <p>Approving...</p>}
        {deposit.isLoading && <p>Depositing...</p>}
        {parseFloat(allowance?.data?.toString() ?? '0') >
          parseFloat(amount) && (
          <button
            className="text-[16px] text-semibold rounded-full bg-primary w-full py-2"
            onClick={() => deposit.write?.()}
            disabled={isAmountZero || !isConnected}
          >
            Deposit
          </button>
        )}

        {allowance?.data?.toString() === '0' && (
          <button
            className="text-[16px] text-semibold rounded-full bg-primary w-full py-2"
            onClick={() => approve?.approve?.()}
            disabled={isAmountZero || !isConnected}
          >
            Approve
          </button>
        )}
      </div>
      {/* <div className="flex flex-row gap-2">
        <input
          className="border-2 border-gray-300 rounded-md p-2 text-black"

        />
        
      </div> */}
    </>
  );
};

export default DepositComponent;
