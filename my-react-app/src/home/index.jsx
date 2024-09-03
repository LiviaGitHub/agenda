import React from 'react';
import './home.css';
import { Header } from '../header';

export const HomePage = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='content'>
        <h1 className='h1'>Hi, my name is Livia Bonifácio</h1>
      </div>
    </div>
  );
};
