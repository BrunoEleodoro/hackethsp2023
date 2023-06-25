import logo from '../assets/logo.png';

function Header() {
  return (
    <div className="justify-between bg-[#1C1F30] fixed flex flex-row w-full items-center p-4 border-b-[1px] border-current">
      <img src={logo} alt="logo" className="self-center w-10 h-10" />
      <div className="flex flex-row self-center  space-x-2 items-center border-current border-[1px] p-2 rounded-full">
        <div className="w-6 h-6 rounded-full ring-2 ring-gray-100 bg-gray-100" />
        <div className="text-[12px]">brunoeleodoro.eth</div>
      </div>
      <svg
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
      </svg>
    </div>
  );
}

export default Header;
