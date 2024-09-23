import * as React from 'react';
import './attempts.css'

interface AttemptsProps {
    count: number;
}

const Attempts: React.FC<AttemptsProps> = ({ count }) => {
    return (
        <h3 className="attempts">
            Tries: {count}
        </h3>
    );
};

export default Attempts;