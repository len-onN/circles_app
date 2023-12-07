import React from 'react';
import './App.css';

export interface CirclePosition {
  x: number;
  y: number;
}

const Circle: React.FC<CirclePosition> = ({ x, y }) => {
  return (
    <div
      className='circle'
      style={{
        left: `${x - 10}px`,
        top: `${y - 10}px`,
      }}
    ></div>
  );
};

export default Circle;
