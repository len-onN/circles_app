import React from 'react';
import Circle, { CirclePosition } from './circle';

interface CirclePositionList {
  circles: CirclePosition[];
}

const CircleList: React.FC<CirclePositionList> = ({ circles }) => {
  return (
    <div>
      {circles.map((circle, index) => (
        <Circle key={index} x={circle.x} y={circle.y} />
      ))}
    </div>
  );
};

export default CircleList;
