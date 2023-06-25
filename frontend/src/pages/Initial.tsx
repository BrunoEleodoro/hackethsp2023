import Logo from '../assets/logo.png';
import CardInitial from '../components/Cards/CardInitial';
import ConnectWalletButton from '../components/ConnectWalletButton';

function Initial() {
  return (
    <div className="p-2 flex flex-col">
      <img
        src={Logo}
        alt="logo"
        width={'140px'}
        className="self-center mt-10"
      />
      <div className="flex flex-row mt-16 space-x-3 md:ml-0 ml-10 snap-x snap-mandatory overflow-x-scroll md:self-center">
        <CardInitial
          title="Plataforma segura e protegida"
          desc="Plataforma projetada da forma mais segura possível"
        />
        <CardInitial
          title="Conecte todas as suas contas"
          desc="Gerencie suas finanças em um único lugar seguro"
        />
      </div>
      <ConnectWalletButton />
    </div>
  );
}

export default Initial;
