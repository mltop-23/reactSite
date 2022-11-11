import React from 'react';
import InputMask from 'react-input-mask';

const TennisPhoneInput = (props) => {

    let className = 'Input Search_Input'

    if (props.inputtype === 'search')
        className = 'Input Search_Input'
    if (props.inputtype === 'auth')
        className = 'Input Auth_Input'

    return (
        <div style={{textAlign: "center"}}>
            <InputMask className={className} mask={'+7 (999) 999-99-99'} {...props}/>
        </div>
    );
};

export default TennisPhoneInput;