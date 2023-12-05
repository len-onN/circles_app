import React from 'react';
import Circle, { CircleProps } from './circle';

interface CircleListProps {
  circles: CircleProps[];
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
