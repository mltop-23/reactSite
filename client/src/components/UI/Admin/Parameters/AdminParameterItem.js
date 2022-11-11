import React from 'react';
import DeleteButton from "../../Buttons/DeleteButton";

const AdminParameterItem = ({parameter}) => {

    const DeleteParameter = (event) => {
        event.preventDefault()

    }

    return (
        <div style={{display:"flex"}}>
            <DeleteButton click={(event)=>{DeleteParameter(event)}}/>
            <div>{parameter.value}</div>
        </div>
    );
};

export default AdminParameterItem;