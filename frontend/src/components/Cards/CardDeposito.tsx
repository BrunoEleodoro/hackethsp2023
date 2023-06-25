import type { SwitchButtonStylesType } from '@material-tailwind/react';
import { Switch, ThemeProvider } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import FGTSBalanceComponent from '../FGTSBalanceComponent';

const CardDeposito: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const goToTheDeposit = () => {
    navigate(`/deposit/${params.name}`);
  };

  const theme = {
    switch: {
      styles: {
        base: {
          root: {
            display: 'inline-flex',
            alignItems: 'items-center',
          },
        },
        colors: {
          orange: {
            checked: '#F97316',
            unchecked: '#F97316',
            disabled: '#F97316',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={theme as SwitchButtonStylesType}>
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
        <div className="flex flex-col p-2 space-y-3">
          <div className="text-[22px] font-bold">Wrapped FGTS</div>
          <div className="text-[14px] font-light">sFGTS</div>
          <div className="flex flex-row justify-between">
            <div className="text-[14px] font-light">Supply balance</div>
            <div className="flex flex-col">
              <div className="text-[14px] font-light">
                <FGTSBalanceComponent />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-[14px] font-light">Supply APY</div>
            <div className="text-[14px] font-light">0.20%</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-[14px] font-light">Used a collateral</div>
            <div className="text-[14px] font-light">
              <Switch id="orange" color="orange" defaultChecked />
            </div>
          </div>
          <div className="flex flex-row">
            <button
              className="text-[16px] text-semibold rounded-full bg-primary w-full py-2"
              onClick={goToTheDeposit}
            >
              Depositar
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CardDeposito;
