import React, {useContext, useEffect, useMemo, useState} from 'react';
import BallItem from "./BallItem";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import {fetchBalls} from "../../../http/ballApi";

const BallsList = observer(() => {

    const {ballStore} = useContext(Context)
    const {filterStore} = useContext(Context)

    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
         fetchBalls().then(data => {
            ballStore.setBalls(data)
             setIsLoaded(true)
        })
    },[])

    const filtersBalls = useMemo(()=>{
        return ballStore.balls.filter(ball =>
            ((filterStore.type.allSelectedId.length===0 || filterStore.type.allSelectedId.includes(ball.ball_info.typeId)) &&
                (filterStore.brand.allSelectedId.length===0 || filterStore.brand.allSelectedId.includes(ball.ball_info.brandId)) &&
                (filterStore.star.allSelectedId.length===0 || filterStore.star.allSelectedId.includes(ball.ball_info.starId)) &&
                (filterStore.producerCountry.allSelectedId.length===0 || filterStore.producerCountry.allSelectedId.includes(ball.ball_info.producerCountryId))) &&
            ball.name.toLowerCase().includes(filterStore.searchQuery)
        )
    },[JSON.stringify(filterStore.type.allSelectedId),
            JSON.stringify(filterStore.brand.allSelectedId),
            JSON.stringify(filterStore.star.allSelectedId),
            JSON.stringify(filterStore.producerCountry.allSelectedId),
            filterStore.searchQuery,
            isLoaded])

    const sortedBalls = useMemo(() => {
        switch (filterStore.priceSort.selectedId){
            case 2:
                return [...filtersBalls].sort(function (a, b) {
                    return b.price - a.price
                })
            case 1:
                return [...filtersBalls].sort(function (a, b) {
                    return a.price - b.price
                })
            default:
                return [...filtersBalls]
        }

    },[filterStore.priceSort.selectedId, filtersBalls])

    return (
        <div className={'balls_list'}>
            {sortedBalls.map(item =>
                <BallItem key={item.id} ball={item}/>
            )}
        </div>
    );
});

export default BallsList;