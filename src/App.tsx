import React, { useState, MouseEvent } from 'react';
import './App.css';

interface Circle {
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [undoStack, setUndoStack] = useState<Circle[]>([]);

  const handleAddCircle = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const newCircle: Circle = { x: clientX, y: clientY };
    setCircles([...circles, newCircle]);
    setUndoStack([...undoStack, newCircle]);
  };

  const handleUndo = () => {
    if (circles.length > 0) {
      const lastCircle = circles[circles.length - 1];
      setCircles(circles.slice(0, -1));
      setUndoStack([...undoStack, lastCircle]);
    }
  };

  const handleRedo = () => {
    if (undoStack.length > 0) {
      const lastUndo = undoStack[undoStack.length - 1];
      setCircles([...circles, lastUndo]);
      setUndoStack(undoStack.slice(0, -1));
    }
  };

  return (
    <div>
      <div
        onClick={handleAddCircle}
        style={{ position: 'relative', height: '400px', border: '1px solid black' }}
      >
        {circles.map((circle, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'blue',
              left: `${circle.x}px`,
              top: `${circle.y}px`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
    </div>
  );
};

export default App;
