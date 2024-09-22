import * as React from 'react';
import './playingField.css';
import {useState} from "react";


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

    const [items, setItems] = useState(createItems())

    return (
        <div className="playing-field">

        </div>
    );
};

export default PlayingField;