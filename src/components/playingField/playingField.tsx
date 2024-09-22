import * as React from 'react';
import './playingField.css';
import {useState} from "react";


const getField = () => {
    const field = [];

    for (let i: number = 0; i < 36; i++) {
        field.push({
            hasItem: false,
            clicked: false,
        });
    }

    const randomIndex = Math.floor(Math.random() * 36);
    field[randomIndex].hasItem = true;

    return field;

}

const PlayingField: React.FC = () => {

    const [items, setItems] = useState(getField());

    return (
        <div className="playing-field">

        </div>
    );
};

export default PlayingField;