import React from 'react';

const LogOutButton = ({click, text}) => {
    return (
        <div onClick={(event) => click(event)}
             className={'button LogOut_Button'}>
            {text}
        </div>
    );
};

export default LogOutButton;