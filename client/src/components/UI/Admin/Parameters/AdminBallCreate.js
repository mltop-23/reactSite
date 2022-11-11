import React, {useContext, useState} from 'react';
import TennisInput from "../../Input/TennisInput";
import GreenButton from "../../Buttons/GreenButton";
import {Context} from "../../../../App";
import {createBallInfo} from "../../../../http/ballInfoApi";
import {createBall} from "../../../../http/ballApi";

const AdminBallCreate = () => {

    const {adminParametersStore} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [count, setCount] = useState(0)
    const [image, setImage] = useState(null)

    const BallCreate = (event) => {
        event.preventDefault()

        const ballInfo = {
            typeId: adminParametersStore.type.selectedId,
            brandId: adminParametersStore.brand.selectedId,
            starId: adminParametersStore.star.selectedId,
            producerCountryId: adminParametersStore.producerCountry.selectedId,
        }

        createBallInfo(ballInfo.starId, ballInfo.brandId, ballInfo.typeId, ballInfo.producerCountryId).then(data =>{

            const newBall = new FormData()
            newBall.append('name', name)
            newBall.append('price', price.toString())
            newBall.append('count', count.toString())
            newBall.append('image', image)
            newBall.append('ballInfoId', data.id)

            createBall(newBall).then(data => {
                console.log(data)
            })
        })
    }

    return (
        <div className={'Admin_BallCreateContainer'}>
            <h6>Название</h6>
            <TennisInput placeholder='Название'
                         inputtype={'auth'}
                         type='text'
                         value={name}
                         onChange={e => setName(e.target.value)}/>
            <h6>Цена</h6>
            <TennisInput type='number'
                         inputtype={'auth'}
                         placeholder='Цена'
                         onChange={e => setPrice(e.target.value)}/>
            <h6>Количество</h6>
            <TennisInput placeholder='Количество'
                         inputtype={'auth'}
                         type='number'
                         onChange={e => setCount(e.target.value)}/>
            <h6>Изображение</h6>
            <TennisInput placeholder='Изображение'
                         inputtype={'auth'}
                         type="file"
                         accept=".png,.jpg,.jpeg"
                         onChange={e => setImage(e.target.files[0])}/>
            <div className={'Admin_BallCreateButtonContainer'}>
                <GreenButton text='Добавить' click={(event)=>{BallCreate(event)}}/>
            </div>
        </div>
    );
};

export default AdminBallCreate;