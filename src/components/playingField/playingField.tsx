import * as React from 'react';
import './playingField.css';


const getField = () => {
    const field = [];
    for (let i: number = 0; i < 36; i++) {
        field.push({
            hasItem: false,
            clicked: false,
        });
    }
    return field;
}

const PlayingField = () => {


    return (
        <div className="playing-field">

        </div>
    );
};

export default PlayingField;