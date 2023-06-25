import { useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: 137,
  });
  const navigate = useNavigate();

  const goToBanks = () => {
    navigate('/banks');
  };

  const { disconnect } = useDisconnect();
  const formattedAddress = `${address?.slice(0, 6)}...${address?.slice(-4)}`;
  if (isConnected)
    return (
      <div className="self-center ">
        {formattedAddress}
        <br />
        <button
          className="bg-primary font-normal rounded-full p-8 py-3 text-[20px] mt-6"
          onClick={() => goToBanks()}
        >
          Prosseguir
        </button>
      </div>
    );

  return (
    <button
      className="self-center bg-primary font-normal rounded-full p-8 py-3 text-[20px] mt-6"
      onClick={() => connect()}
    >
      Conectar carteira
    </button>
  );
}

export default ConnectWalletButton;
