import { useNavigate } from 'react-router-dom';

interface CardBanksProps {
  img: string;
  name: string;
}

const CardBanks: React.FC<CardBanksProps> = ({ img, name }) => {
  const navigate = useNavigate();

  const goToTheBank = () => {
    navigate(`/pool/${name}`);
  };

  return (
    <div
      className="bg-[#393f63] flex flex-row items-center space-x-4 p-2 rounded-lg"
      onClick={goToTheBank}
    >
      <img src={img} alt="logo" className="self-center w-10 h-10 rounded-xl" />
      <div className="text-[18px] font-semibold">{name}</div>
    </div>
  );
};

export default CardBanks;
