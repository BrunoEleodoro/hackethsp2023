import { useNavigate } from 'react-router-dom';

const CardEmprestimo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#21253D] flex flex-col rounded-t-3xl space-y-2 border-[1px] border-current">
      <div className="flex flex-col p-2 border-b-[1px] border-current">
        <div className="flex flex-row justify-between">
          <div className="text-[16px] font-normal">Your supplies</div>
          <div className="text-[16px] font-normal">Hide --</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            Balance $4,888,22
          </div>
          <div className="border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            APY 0.20%
          </div>
          <div className="border-[1px] border-current text-[12px] p-1 px-2 text-center rounded-full">
            Collateral $4,888,22
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 space-y-2">
        <input className="rounded-md text-[16px] h-10 text-black p-2"></input>
        <div className="flex flex-row">
          <button className="text-[16px] text-semibold rounded-full bg-primary w-full py-2">
            Pegar empréstimo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEmprestimo;
