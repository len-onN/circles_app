// buttons.tsx

import React, { RefObject } from 'react';

interface UndoRedoButtonsProps {
  onUndo: () => void;
  onRedo: () => void;
  undoDisabled: boolean;
  redoDisabled: boolean;
  buttonContainerRef: RefObject<HTMLDivElement>;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({
  onUndo, onRedo, undoDisabled, redoDisabled, buttonContainerRef
}) => {
  return (
    <div ref={buttonContainerRef} style={{ position: 'fixed', display: 'inline' }}>
      <button style={{ width: '200px' }} onClick={onUndo} disabled={undoDisabled}>
        Desfazer
      </button>
      <button style={{ width: '200px' }} onClick={onRedo} disabled={redoDisabled}>
        Refazer
      </button>
    </div>
  );
};

export default UndoRedoButtons;
