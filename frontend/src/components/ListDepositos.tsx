import CardDeposito from './Cards/CardDeposito';

interface ListDepositoProps {
  active: boolean;
}

const ListDeposito: React.FC<ListDepositoProps> = ({ active }) => {
  if (!active) return null;

  return (
    <div className="flex flex-col mx-2">
      <CardDeposito />
    </div>
  );
};

export default ListDeposito;
