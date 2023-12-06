import React from 'react';

interface UndoRedoButtonsProps {
  onUndo: () => void;
  onRedo: () => void;
  undoDisabled: boolean;
  redoDisabled: boolean;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({ onUndo, onRedo, undoDisabled, redoDisabled }) => {
  return (
    <div style={{position: 'relative', left: '32%'}}>
      <button style={{width: '200px'}} onClick={onUndo} disabled={undoDisabled}>
        Desfazer
      </button>
      <button style={{width: '200px'}} onClick={onRedo} disabled={redoDisabled}>
        Refazer
      </button>
    </div>
  );
};

export default UndoRedoButtons;
