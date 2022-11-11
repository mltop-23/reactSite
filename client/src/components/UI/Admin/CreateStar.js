import React, {useState} from 'react';
import {createType} from "../../../http/typeApi";
import TennisInput from "../Input/TennisInput";
import {createStar} from "../../../http/starApi";

const CreateStar = () => {
    const [value, setValue] = useState('')
    const addStar = () => {
        createStar (value).then(data => {
            setValue('')
        })
    }
    return (
        <div>
            <TennisInput value={value}
                         onChange={e => setValue(e.target.value)}
                         placeholder={"Введите Новое количество звезд мяча"}/>

            {/*<button onClick={() => console.log("rerer")}>Закрыть</button>*/}
            <button onClick={addStar}>Добавить</button>
        </div>
    );
};

export default CreateStar;