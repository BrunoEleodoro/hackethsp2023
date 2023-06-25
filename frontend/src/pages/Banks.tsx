import { useParams } from 'react-router-dom';
import bancoBrasil from '../assets/banks/bancoBrasil.png';
import bradesco from '../assets/banks/bradesco.png';
import caixa from '../assets/banks/caixa.png';
import inter from '../assets/banks/inter.png';
import itau from '../assets/banks/itau.png';
import santander from '../assets/banks/santander.png';
import CardBanks from '../components/Cards/CardBanks';
import Content from '../components/Content';
function Banks() {
  const params = useParams();

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

  return (
    <Content>
      <div className="flex flex-col">
        <div className="font-bold text-[20px]">Olá Bruno, seja bem-vindo!</div>
        <div className="font-normal text-[14px] mb-5">
          Selecione umas das opções abaixo para prosseguir:
        </div>
        <div className="flex flex-col space-y-2">
          {banks.map((bank) => (
            <CardBanks name={bank.name} img={bank.logo} />
          ))}
        </div>
      </div>
    </Content>
  );
}

export default Banks;
