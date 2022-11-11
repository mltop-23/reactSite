import React, {useState} from 'react';
import {createBrand} from "../../../http/brandApi";
import TennisInput from "../Input/TennisInput";

const CreateBrand = () => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand (value).then(data => {
            setValue('')
        })
    }
    return (
        <div>
            <TennisInput value={value}
                         onChange={e => setValue(e.target.value)}
                         placeholder={"Введите название типа"}/>
            <button onClick={addBrand}>Добавить</button>
        </div>
    );
};

export default CreateBrand;