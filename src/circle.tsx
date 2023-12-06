import React from 'react';

interface CircleProps {
  x: number;
  y: number;
}

const Circle: React.FC<CircleProps> = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'blue',
        left: `${x}px`,
        top: `${y}px`,
      }}
    ></div>
  );
};

export default Circle;
