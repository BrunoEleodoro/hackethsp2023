import { useParams } from 'react-router-dom';
import bancoBrasil from '../assets/banks/bancoBrasil.png';
import bradesco from '../assets/banks/bradesco.png';
import caixa from '../assets/banks/caixa.png';
import inter from '../assets/banks/inter.png';
import itau from '../assets/banks/itau.png';
import santander from '../assets/banks/santander.png';
import Content from '../components/Content';

function Pool() {
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

  return (
    <Content>
      <div className="flex flex-col space-y-2">
        <div className="font-normal text-[14px]">Dashboard</div>
        <div className="flex flex-row items-center space-x-2 !mb-5">
          <img src={bank?.logo} className="w-10 w-10 rounded-md" />
          <div className="font-semibold text-[16px]">{bank?.name}</div>
        </div>
        <div className="flex flex-row justify-between space-x-2">
          <div className="flex flex-col">
            <div className="font-normal text-[16px]">Net worth</div>
            <div className="font-normal text-[16px]">$ 2.9k</div>
          </div>
          <div className="flex flex-col">
            <div className="font-normal text-[16px]">Net APY</div>
            <div className="font-normal text-[16px]">- 2.48%</div>
          </div>
          <div className="flex flex-col">
            <div className="font-normal text-[16px]">Net worth</div>
            <div className="font-normal text-[16px]">2.46</div>
          </div>
        </div>
        <div className="border-[1px] border-current text-[14px] p-1 px-2 w-24 text-center rounded-full">
          Risk details
        </div>
        <div className="border-[1px] border-current text-[14px] p-1 px-2 w-24 text-center rounded-full">
          Notify
        </div>
      </div>
    </Content>
  );
}

export default Pool;
