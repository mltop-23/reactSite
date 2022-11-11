import React, {useContext, useEffect, useState} from 'react';
import Filter from "./Filter";
import filterPic from '../../../Assets/Filter.png'
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import {fetchTypes} from "../../../http/typeApi";
import {fetchBrands} from "../../../http/brandApi";
import {fetchStars} from "../../../http/starApi";
import {fetchProducerCountries} from "../../../http/producerCountryApi";

const FilterList = observer(() => {

    const {filterStore} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => filterStore.setType(data))
        fetchBrands().then(data => filterStore.setBrand(data))
        fetchStars().then(data => filterStore.setStar(data))
        fetchProducerCountries().then(data => filterStore.setProducerCountry(data))
    },[])


    const [isHidden, setHidden] = useState(true)
    const changeHidden = () => {
        setHidden(!isHidden)
    }

    const filters = []
    filters.push(filterStore.type, filterStore.brand, filterStore.star, filterStore.producerCountry, filterStore.priceSort)

    return (
        <div className={'Filter_Container'}>
            <div className={'Filter_Button'}
                 onClick={changeHidden}>
                <img src={filterPic}
                     width={20}
                     height={20}/>
                <p>Фильтры</p>
            </div>
            <div>
                <div className={'Filter_List'}>
                    {filters.map(filter =>
                        <Filter key={filter.name} filter={filter}/>
                    )}
                </div>
            </div>
        </div>
    );
});

export default FilterList;