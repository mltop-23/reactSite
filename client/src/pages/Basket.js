import React, {useContext, useEffect, useState} from 'react';
import {changeBasketBallCount, deleteOneBasketBall, getAllBasketBalls} from "../http/BasketApi";
import {Context} from "../App";
import BasketBallsList from "../components/UI/Basket/BasketBallsList";
import {observer} from "mobx-react-lite";
import GreenButton from "../components/UI/Buttons/GreenButton";
import {useHistory} from "react-router-dom";
import {ORDER_PAGE_ROUTE} from "../utils/Consts";

const Basket = observer(() => {

    const history = useHistory()

    const {user,ballStore} = useContext(Context)

    const [allBasketBalls, setAllBasketBalls] = useState([])
    const [selectedBasketBalls, setSelectedBasketBalls] = useState([])
    const [allPrice, setAllPrice] = useState(0)

    const deleteBall = (basketBallArray,setBasketBallArray,basketBall) => {

        let deleteBasketBall = basketBallArray.find(ball => ball.id = basketBall.id)

        if (deleteBasketBall){
            let newSelectedBasketBalls = basketBallArray
            newSelectedBasketBalls.splice(basketBallArray.indexOf(deleteBasketBall),1)
            setBasketBallArray([...newSelectedBasketBalls])
        }
    }

    const getAllPrice = (basketBalls) => {
        let price = 0

        basketBalls.forEach(basketBall => {
            price = price + basketBall.ball.price*basketBall.count
        })

        return price
    }

    useEffect(()=>{
        getAllBasketBalls(user.user.id).then(data =>{

            let balls = [...data]
            balls.forEach(basketBall => basketBall.selected = true)

            setAllBasketBalls(balls)

            setAllPrice(getAllPrice(data))
        })
    },[user.user])

    useEffect(()=>{
        let price = 0

        allBasketBalls.forEach(basketBall => {
            if (basketBall.selected)
                price = price + basketBall.ball.price*basketBall.count
        })

        selectedBalls()

        setAllPrice(price)
    },[allBasketBalls])

    const changeBallCount = (ballId, newCount) => {
        changeBasketBallCount(ballId,newCount).then(data => {

            const index = allBasketBalls.map(basketBall => basketBall.ball.id).indexOf(ballId)
            let count = data

            if (count > allBasketBalls[index].ball.count)
                count = allBasketBalls[index].ball.count
            let newBalls = allBasketBalls
            newBalls[index].count = count

            setAllBasketBalls([...newBalls])
        })
    }

    const deleteBasketBall = (basketBallId) => {
        deleteOneBasketBall(basketBallId).then(data => {
            deleteBall(allBasketBalls,setAllBasketBalls,data)
        })
    }

    const select = (basketBall) => {
        let  newBalls = [...allBasketBalls]

        newBalls.forEach(ball => {
            if (basketBall === ball)
                ball.selected = true
        })

        setAllBasketBalls(newBalls)
    }

    const unselect = (basketBall) => {
        let  newBalls = [...allBasketBalls]

        newBalls.forEach(ball => {
            if (basketBall === ball)
                ball.selected = false
        })

        setAllBasketBalls(newBalls)
    }

    const selectedBalls = () => {
        let basketBalls = []

        allBasketBalls.forEach(ball => {
            if (ball.selected)
                basketBalls.push(ball)
        })

        setSelectedBasketBalls(basketBalls)
    }

    const orderClick = (event) => {
        ballStore.setOrderedBall(selectedBasketBalls)

        history.push(`${ORDER_PAGE_ROUTE}`)
    }

    return (
        <div className={'Basket_Page'}>
            <BasketBallsList basketBalls={allBasketBalls} deleteBasketBall={deleteBasketBall} changeCount={changeBallCount} select={select} unselect={unselect}/>
            <div className={'Basket_Order_List'}>
                <h2 className={'Basket_Order_List_Title'}>Заказ</h2>
                {selectedBasketBalls.map(basketBall =>
                    <p key={basketBall.ball.id} className={'Basket_Order_List_Ball_Name'}>• {basketBall.ball.name}, {basketBall.count}шт</p>
                )}
                <h3 className={'Basket_Order_List_Price'}>{allPrice} р.</h3>
                <div className={'Basket_Order_List_Buy_Button_Container'}>
                    <GreenButton text={'Оформить'} click={orderClick}/>
                </div>
            </div>
        </div>
    );
});

export default Basket;