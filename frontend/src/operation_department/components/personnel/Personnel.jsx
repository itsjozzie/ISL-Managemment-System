import React from 'react';
import { Outlet } from 'react-router-dom';
import './Personnel.scss';

const Personnel = () => {
  return (
    <div className="personnel-container">
      <Outlet /> 
    </div>
  );
};

export default Personnel;
