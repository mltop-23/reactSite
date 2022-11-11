import React from 'react';

const DeleteButton = ({click}) => {
    return (
        <div onClick={(event) => click(event)}
             className={'button Delete_Button'}>
        X
        </div>
    );
};

export default DeleteButton;