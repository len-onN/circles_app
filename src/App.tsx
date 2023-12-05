import React, { useState, MouseEvent } from 'react';
import CircleList from './circles';
import { CircleProps } from './circle';
import UndoRedoButtons from './buttons';

const App: React.FC = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]);
  const [undoStack, setUndoStack] = useState<CircleProps[]>([]);

  const handleAddCircle = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const newCircle: CircleProps = { x: clientX, y: clientY };
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
      <div onClick={handleAddCircle} style={{ position: 'relative', height: '100vh', width: '100vw', border: '1px solid black' }}>
        <CircleList circles={circles} />
      </div>
      <UndoRedoButtons onUndo={handleUndo} onRedo={handleRedo} undoDisabled={circles.length === 0} redoDisabled={undoStack.length === 0} />
    </div>
  );
};

export default App;
