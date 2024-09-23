import * as React from 'react';
import './playingField.css';
import {useState} from "react";
import Cell from '../cell/cell';
import ResetBtn from '../resetBtn/resetBtn';
import Attempts from '../attempts/attempts';

const createItems = () => {
    const Items = [];

    for (let i: number = 0; i < 36; i++) {
        Items.push({
            hasItem: false,
            clicked: false,
        });
    }

    const randomIndex = Math.floor(Math.random() * 36);
    Items[randomIndex].hasItem = true;

    return Items;

}

const PlayingField: React.FC = () => {

    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState(0);
    const [found, setFound] = useState(false);

    const clickProcessing = (index: number) => {
        if (items[index].clicked || found) return;

        const newItemsCopy = [...items];
        newItemsCopy[index] = {
            ...newItemsCopy[index],
            clicked: true,
        };

        if (newItemsCopy[index].hasItem) {
            setFound(true);
            alert("Вы выиграли!");
        }

        setItems(newItemsCopy);
        setAttempts(prev => prev + 1);
    };

    const resetGame = () => {
        setItems(createItems());
        setAttempts(0);
        setFound(false);
    };

    return (
        <div>
            <Attempts count={attempts}/>
            <div className="block">
                <div className="playing-field">
                    {items.map((item, i) => (
                        <Cell
                            key={i}
                            hasItem={item.hasItem}
                            clicked={item.clicked}
                            onClick={() => clickProcessing(i)}
                        />
                    ))}
                </div>
            </div>

            <ResetBtn resetGame={resetGame}/>
        </div>
    );
};

export default PlayingField;