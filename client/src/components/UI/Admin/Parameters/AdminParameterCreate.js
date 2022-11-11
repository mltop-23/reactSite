import React, {useContext, useState} from 'react';
import {createBrand} from "../../../../http/brandApi";
import {createType} from "../../../../http/typeApi";
import {createStar} from "../../../../http/starApi";
import {createProducerCountry} from "../../../../http/producerCountryApi";
import TennisInput from "../../Input/TennisInput";
import GreenButton from "../../Buttons/GreenButton";
import {Context} from "../../../../App";

const AdminParameterCreate = ({parameterName, setAdding}) => {

    const {adminParametersStore} = useContext(Context)

    const [value, setValue] = useState('')

    const CreateParameter = (event) => {
        switch (parameterName) {
            case 'Тип':
                /////////////////          Includes check
                createType(value).then(data=>{
                    setAdding(JSON.stringify(data))
                })
                break
            case 'Бренд':
                createBrand(value).then(data=>{
                })
                break
            case 'Звезды':
                createStar(value).then(data=>{
                })
                break
            case 'Страна':
                createProducerCountry(value).then(data=>{
                })
                break
        }
    }

    return (
        <div className={'Admin_ParameterCreateContainer'}>
            <TennisInput value={value}
                         inputtype={'admin'}
                         onChange={e => setValue(e.target.value)}
                         placeholder={"Параметр"}/>
            <GreenButton AdminParameter={true} text={'Добавить'} click={(event)=>{CreateParameter(event)}}/>
        </div>
    );
};

export default AdminParameterCreate;