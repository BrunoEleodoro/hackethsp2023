import { useAccount } from 'wagmi';
import ConnectWalletButton from './components/ConnectWalletButton';
import DepositComponent from './components/DepositComponent';

function App_old() {
  const { address, isConnected } = useAccount();
  return (
    <div className="bg-gray-700 text-white min-h-screen">
      <ConnectWalletButton />
      <br />
      {isConnected && (
        <>
          <DepositComponent />
        </>
      )}
    </div>
  );
}

export default App_old;
