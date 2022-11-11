import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../App";
import {fetchTypes} from "../../../http/typeApi";
import {fetchBrands} from "../../../http/brandApi";
import TennisInput from "../Input/TennisInput";
import {createBall} from "../../../http/ballApi";

const CreateBall = observer(() => {
    const {ballStore} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [file, setFile] = useState(null)
    const [count, setCount] = useState()
    const [ballInfoId, setBallInfoId] = useState()

    // useEffect(() => {
    //     fetchTypes().then(data => ballStore.setTypes(data))
    //     fetchBrands().then(data => ballStore.setBrands(data))
    // }, [])
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addBall = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('count', `${count}`)
        formData.append('image:'+file,file)
        formData.append('ballInfoId', JSON.stringify(ballInfoId))
        createBall(formData)
    }

    return (
        <div>
            <TennisInput value={name}
                         onChange={e => setName(e.target.value)}
                         placeholder="Введите название устройства" />
            <TennisInput value={price}
                         onChange={e => setPrice(Number(e.target.value))}
                         placeholder="Введите стоимость устройства"
                         type="number"/>

            <TennisInput type="file"
                         // value = {file}
                         onChange={selectFile}/>

            <TennisInput value={count}
                         onChange={e => setCount(Number(e.target.value))}
                         placeholder="Введите количество"
                         type="number"/>
            <TennisInput value={ballInfoId}
                         onChange={e => setBallInfoId(e.target.value)}
                         placeholder="Введите свойства мяча"
                         />
            {/*<button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    // onClick={addInfo}*/}
            {/*>*/}
            {/*    Добавить новое свойство*/}
            {/*</button>*/}
            <button onClick={addBall}>Добавить</button>
        </div>
    );
});

export default CreateBall;