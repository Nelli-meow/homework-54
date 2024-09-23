import * as React from 'react';
import './resetBtn.css';

interface ResetBtnProps {
    resetGame: () => void;
}

const ResetBtn: React.FC<ResetBtnProps> = ({resetGame}) => {

    return (
        <button type="button" className="reset-btn" onClick={resetGame}>
            Reset
        </button>
    );
};

export default ResetBtn;