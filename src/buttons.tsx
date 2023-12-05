import React from 'react';

interface UndoRedoButtonsProps {
  onUndo: () => void;
  onRedo: () => void;
  undoDisabled: boolean;
  redoDisabled: boolean;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({ onUndo, onRedo, undoDisabled, redoDisabled }) => {
  return (
    <div>
      <button onClick={onUndo} disabled={undoDisabled}>
        Desfazer
      </button>
      <button onClick={onRedo} disabled={redoDisabled}>
        Refazer
      </button>
    </div>
  );
};

export default UndoRedoButtons;
