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

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <br />
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return (
    <button
      className="self-center bg-primary font-normal rounded-full p-8 py-3 text-[20px] mt-6"
      onClick={goToBanks}
    >
      Conectar carteira
    </button>
  );
}

export default ConnectWalletButton;
