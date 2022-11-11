import React, {useContext} from 'react';
import DeleteButton from "../Buttons/DeleteButton";
import BallItemComponent from "../Balls/BallItemComponent";
import BasketBallCounter from "./BasketBallCounter";
import GreenButton from "../Buttons/GreenButton";
import CheckboxRadioButton from "../Input/CheckboxRadioButton";
import {ORDER_PAGE_ROUTE} from "../../../utils/Consts";
import {useHistory} from "react-router-dom";
import {Context} from "../../../App";

const BasketBallItem = ({basketBall, deleteBasketBall, changeCount, select, unselect}) => {

    const history = useHistory()

    const {ballStore} = useContext(Context)

    const selectBall = (checked) => {
        if (checked){
            select(basketBall)
        }
        else {
            unselect(basketBall)
        }
    }

    const buyBall = (event) => {
        event.stopPropagation()
        ballStore.setOrderedBall([basketBall])
        // === BUY ===
        history.push(`${ORDER_PAGE_ROUTE}`)
    }

    const deleteBall = (event) => {
        event.stopPropagation()
        deleteBasketBall(basketBall.id)
    }

    const changeBallCount = (event, newCount) => {
        event.stopPropagation()

        changeCount(basketBall.ball.id, newCount)
    }

    return (
        <div className={'Basket_Ball_Item_Container'}>
            <CheckboxRadioButton type={'checkbox'} name={basketBall.id} defaultChecked={true} onInput={selectBall}/>

            <div className={'Basket_Ball_Item'}>
                <BallItemComponent ball={basketBall.ball}
                                   ballItemClassName={'basket_ball_item'}
                                   ballItemInfoClassName={'basket_ball_item_info'}
                                   price={`${basketBall.count} x ${basketBall.ball.price} = ${basketBall.count*basketBall.ball.price}`}
                                   allowRouteOnClick={false}
                                   showBasketButton = {false}
                                   showInfo={true}>

                    <div className={'ball_item_buy ball_item_buy_basket'}>
                        <div className={'Basket_Ball_Item_Delete_Button_Container'}>
                            <DeleteButton click={deleteBall}/>
                        </div>
                        <BasketBallCounter basketBall={basketBall} changeCount={changeBallCount}/>
                        <GreenButton click={buyBall} text={'Купить'}/>
                    </div>

                </BallItemComponent>
            </div>
        </div>
    );
};

export default BasketBallItem;