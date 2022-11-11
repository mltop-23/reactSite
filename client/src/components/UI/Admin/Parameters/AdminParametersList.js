import React, {useContext, useEffect, useState} from 'react';
import AdminParameter from "./AdminParameter";
import {Context} from "../../../../App";
import {fetchTypes} from "../../../../http/typeApi";
import {fetchBrands} from "../../../../http/brandApi";
import {fetchStars} from "../../../../http/starApi";
import {fetchProducerCountries} from "../../../../http/producerCountryApi";
import {observer} from "mobx-react-lite";

const AdminParametersList = observer(() => {

    const {adminParametersStore} = useContext(Context)

    const [adding, setAdding] = useState('')

    useEffect(()=>{
        fetchTypes().then(data => adminParametersStore.setType(data))
        fetchBrands().then(data => adminParametersStore.setBrand(data))
        fetchStars().then(data => adminParametersStore.setStar(data))
        fetchProducerCountries().then(data => adminParametersStore.setProducerCountry(data))
    },[adding])

    return (
        <div className={'Admin_ParametersList'}>
            <h2>Характеристики:</h2>
            <AdminParameter adding={adding} setAdding={setAdding} parameter={adminParametersStore.type}/>
            <AdminParameter adding={adding} setAdding={setAdding} parameter={adminParametersStore.brand}/>
            <AdminParameter adding={adding} setAdding={setAdding} parameter={adminParametersStore.star}/>
            <AdminParameter adding={adding} setAdding={setAdding} parameter={adminParametersStore.producerCountry}/>
        </div>
    );
});

export default AdminParametersList;