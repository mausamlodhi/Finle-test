import React from 'react';
import '../styles/sidebar.css';
import { CarryBagIcon, ChartIcon, HomeIcon, LogoIcon, LogoutIcon, TaskIcon, WalletIcon } from './icons';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo"><LogoIcon/></h2>
      <ul className="nav">
        <li className='icons'><HomeIcon /></li>
        <li className='icons'><ChartIcon /></li>
        <li className='icons'><TaskIcon /></li>
        <li className='icons'><WalletIcon /></li>
        <li className='icons'><CarryBagIcon /></li>
      </ul>
      <ul className='nav logout'>
      <li className='icons'><LogoutIcon /></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
