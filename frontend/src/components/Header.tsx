import { useNavigate } from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';
import logo from '../assets/logo.png';
import FaucetFGTS from './FaucetFGTS';

function Header() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  if (!address) return null;
  const formattedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="justify-between bg-[#1C1F30] fixed flex flex-row w-full items-center p-4 border-b-[1px] border-current">
      <img src={logo} alt="logo" className="self-center w-10 h-10" />
      <div className="flex flex-row self-center  space-x-2 items-center border-current border-[1px] p-2 rounded-full">
        <div className="w-6 h-6 rounded-full ring-2 ring-gray-100 bg-gray-100" />
        <div
          className="text-[12px] cursor-pointer"
          onClick={() => {
            window.confirm('Tem certeza que deseja desconectar?') &&
              disconnect();
            navigate('/');
          }}
        >
          {formattedAddress}
        </div>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg> */}
      <FaucetFGTS />
    </div>
  );
}

export default Header;
