import React from 'react';

const TennisInput = (props) => {

    let className = 'Input Search_Input'

    if (props.inputtype === 'search')
        className = 'Input Search_Input'
    if (props.inputtype === 'auth')
        className = 'Input Auth_Input'
    if (props.inputtype === 'admin')
        className = 'Input Admin_Input'

    return (
        <div style={{textAlign: "center"}}>
            <input className={className} {...props}/>
        </div>
    );
};

export default TennisInput;