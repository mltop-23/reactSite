import React from 'react';

const IncrementDecrementButton = ({click, isIncrement = true, disabled=false}) => {
    return (
        <button onClick={(event) => click(event)}
            className={'button Increment_Decrement_Button'}
            disabled={disabled}>
            {isIncrement ? '+' : '-'}
        </button>
    );
};

export default IncrementDecrementButton;