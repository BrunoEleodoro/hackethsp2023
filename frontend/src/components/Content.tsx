import React from 'react';
import Header from './Header';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="pt-24 p-3">{children}</div>
    </React.Fragment>
  );
};

export default Content;
