import success from '../assets/success.png';
import Content from '../components/Content';
import { useNavigate, useParams } from 'react-router-dom';

function Status() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <Content>
      <div className="p-2 flex flex-col h-full justify-center space-y-10">
        <div className="text-center text-[24px] font-bold">
          Depósito realizado com <div className="text-primary">sucesso</div>
        </div>
        <img
          src={success}
          alt="logo"
          width={'140px'}
          className="self-center mt-10"
        />
        <button
          className="text-[16px] self-center text-semibold rounded-full bg-primary w-6/12 py-2"
          onClick={() => {
            navigate(`/pool/${params.name}`);
          }}
        >
          Continuar
        </button>
      </div>
    </Content>
  );
}

export default Status;
