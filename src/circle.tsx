import React from 'react';

export interface CirclePosition {
  x: number;
  y: number;
}

const Circle: React.FC<CirclePosition> = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'blue',
        left: `${x - 10}px`,
        top: `${y - 10}px`,
      }}
    ></div>
  );
};

export default Circle;
