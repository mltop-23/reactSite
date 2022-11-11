import React, {useState} from 'react';

import TennisInput from "../Input/TennisInput";
import {createType} from "../../../http/typeApi";

const CreateType = () => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType (value).then(data => {
            setValue('')
        })
    }
    return (
        <div>
            <TennisInput value={value}
                         onChange={e => setValue(e.target.value)}
                         placeholder={"Введите название типа"}/>

            {/*<button onClick={() => console.log("rerer")}>Закрыть</button>*/}
            <button onClick={addType}>Добавить</button>
        </div>
    );
};

export default CreateType;