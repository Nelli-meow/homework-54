import * as React from 'react';
import './cell.css';

interface ICellProps {
    hasItem: boolean,
    clicked: boolean,
    onClick: () => void,
    key: number,
}

const Cell: React.FC<ICellProps> = ({hasItem, clicked, onClick,}) => {

    return (
        <div className={`cell ${clicked ? 'clicked' : ''}`} onClick={onClick}>
            {clicked ? (hasItem ? <span className="symbol">✚</span> : '') : ''}
        </div>
    );
};

export default Cell;