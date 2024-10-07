import React, { FC } from 'react';
import { Logo } from '../logo/logo';

import './header.css';

export const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <nav>{/* Навигационные элементы */}</nav>
    </header>
  );
};
