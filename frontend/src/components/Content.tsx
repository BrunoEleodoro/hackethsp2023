import React from 'react';
import Header from './Header';

interface ContentProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Content: React.FC<ContentProps> = ({ children, noPadding = false }) => {
  return (
    <React.Fragment>
      <Header />
      <div className={`pt-24 ${!noPadding && 'p-3'}`}>{children}</div>
    </React.Fragment>
  );
};

export default Content;
