import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bancoBrasil from '../assets/banks/bancoBrasil.png';
import bradesco from '../assets/banks/bradesco.png';
import caixa from '../assets/banks/caixa.png';
import inter from '../assets/banks/inter.png';
import itau from '../assets/banks/itau.png';
import santander from '../assets/banks/santander.png';
import Content from '../components/Content';
import FGTSBalanceComponent from '../components/FGTSBalanceComponent';
import DepositComponent from '../components/DepositComponent';
import ExistingDeposits from '../components/ExistingDeposits';
import RealDigitalBalance from '../components/RealDigitalBalance';

function Deposit() {
  const navigate = useNavigate();
  let banks = [
    {
      name: 'Banco do Brasil',
      logo: bancoBrasil,
    },
    {
      name: 'Bradesco',
      logo: bradesco,
    },
    {
      name: 'Itaú',
      logo: itau,
    },
    {
      name: 'Caixa',
      logo: caixa,
    },
    {
      name: 'Santander',
      logo: santander,
    },
    {
      name: 'Inter',
      logo: inter,
    },
  ];
  const params = useParams();
  const bank = banks.find((bank) => bank.name === params.name);
  const [activeTab, setActiveTab] = useState(1);

  const setActiveTabHandler = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <Content noPadding={true}>
      <div className="flex flex-col space-y-2 pb-10">
        <div className="flex flex-col space-y-2 border-b-[1px] border-current pb-3 p-2">
          <button
            className="text-[16px] text-semibold rounded-full bg-primary w-20 py-2"
            onClick={() => navigate(-1)}
          >
            👈 Voltar
          </button>
          <div className="font-normal text-[14px]">Dashboard</div>
          <div className="flex flex-row items-center space-x-2 !mb-5">
            <img src={bank?.logo} className="w-10 w-10 rounded-md" />
            <div className="font-semibold text-[16px]">{bank?.name}</div>
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="flex flex-col">
              <div className="font-normal text-[16px]">FGTS Depositado</div>
              <ExistingDeposits />
            </div>
            <div className="flex flex-col">
              <div className="font-normal text-[16px]">Net APY</div>
              <div className="font-normal text-[16px]">- 2.48%</div>
            </div>
            <div className="flex flex-col">
              <div className="font-normal text-[16px]">REAL Emprestado</div>
              <RealDigitalBalance />
            </div>
          </div>
          <div className="border-[1px] border-current text-[12px] p-1 px-2 w-24 text-center rounded-full">
            Risk details
          </div>
          <div className="border-[1px] border-current text-[12px] p-1 px-2 w-24 text-center rounded-full">
            <div className="flex flex-row justify-center space-x-1 items-center">
              <div className="bg-gray-100 rounded-sm w-4 h-4" />
              <div>Notify</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pb-3 p-2">
          <div className="flex flex-row justify-between space-x-2">
            <div className="font-normal text-[16px]">Asset</div>
            <div className="font-normal text-[16px]">sFGTS</div>
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="font-normal text-[16px]">Balance</div>
            <FGTSBalanceComponent />
          </div>
          <div className="flex flex-row justify-between space-x-2">
            <div className="font-normal text-[16px]">Total</div>
            <FGTSBalanceComponent />
          </div>
          <DepositComponent />
        </div>
      </div>
    </Content>
  );
}

export default Deposit;
