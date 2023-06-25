import CardEmprestimo from './Cards/CardEmprestimo';

interface ListEmprestimoProps {
  active: boolean;
}

const ListEmprestimo: React.FC<ListEmprestimoProps> = ({ active }) => {
  if (!active) return null;

  return (
    <div className="flex flex-col mx-2">
      <CardEmprestimo />
    </div>
  );
};

export default ListEmprestimo;
