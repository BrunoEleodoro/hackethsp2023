interface CardInitialProps {
  title: string;
  desc?: string;
}

const CardInitial: React.FC<CardInitialProps> = ({ title, desc }) => {
  return (
    <div className="bg-[#21253D] min-h-[250px] w-[250px]  p-4 rounded-lg space-y-2 snap-start shrink-0 relative">
      <div className="flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-12 h-12 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <div className="text-[18px] font-semibold">{title}</div>
        <div className="text-[18px] font-normal">{desc}</div>
      </div>
    </div>
  );
};

export default CardInitial;
