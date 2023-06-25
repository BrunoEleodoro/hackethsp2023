import { useParams } from 'react-router-dom';

interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactElement[] | React.ReactElement;
}

export const Tab: React.FC<TabProps> = ({ active, onClick, children }) => {
  const params = useParams();

  return (
    <div
      className={`flex items-center justify-center cursor-pointer p-2 relative w-full  h-12 rounded-full ${
        active && 'bg-primary'
      }`}
      onClick={onClick}
    >
      {children}
      {/* <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-primary transition-all duration-300 ease-in-out transform ${
          active ? 'scale-x-100' : 'scale-x-0'
        }`}
      /> */}
    </div>
  );
};
