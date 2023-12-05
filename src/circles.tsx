import React from 'react';
import Circle from './circle';

interface CircleListProps {
  circles: { x: number; y: number }[];
}

const CircleList: React.FC<CircleListProps> = ({ circles }) => {
  return (
    <div>
      {circles.map((circle, index) => (
        <Circle key={index} x={circle.x} y={circle.y} />
      ))}
    </div>
  );
};

export default CircleList;
