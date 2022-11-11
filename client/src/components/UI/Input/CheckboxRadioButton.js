import React from 'react';

const CheckboxRadioButton = ({name,type,text,onInput, defaultChecked = false}) => {
    return (
        <label>
            <input className={'Filter_Input'}
                   name = {name}
                   type={type}
                   onInput={(event) => onInput(event.target.checked)}
                   defaultChecked={defaultChecked}/>
            <span className={'Filter_Input_Span'}>{text}</span>
        </label>
    );
};

export default CheckboxRadioButton;