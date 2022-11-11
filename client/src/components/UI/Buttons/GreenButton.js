import React from 'react';

const GreenButton = ({click,text,AdminParameter=false}) => {

    let Class = 'button Buy_Button'
    if (AdminParameter)
        Class = 'button Buy_Button AdminParameterAdd'

    return (
        <div onClick={(event) => click(event)}
             className={Class}>
            {text}
        </div>
    );
};


export default GreenButton;