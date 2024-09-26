import React, { FC } from 'react';
import { Header } from '../header/header';

import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div>{children}</div>
    </div>
  );
};
