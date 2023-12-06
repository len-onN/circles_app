import React, { useState, MouseEvent } from 'react';
import CircleList from './circles';
import UndoRedoButtons from './buttons';

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
    <>
    <UndoRedoButtons onUndo={handleUndo} onRedo={handleRedo} undoDisabled={circles.length === 0} redoDisabled={undoStack.length === 0} />
    <div onClick={handleAddCircle} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div>
        <CircleList circles={circles} />
      </div>
    </div>
    </>
  );
};

export default App;
