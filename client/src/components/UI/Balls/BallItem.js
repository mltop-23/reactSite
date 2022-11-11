import React from 'react';
import BallItemBasketButton from "../Buttons/BallItemBasketButton";
import BallItemComponent from "./BallItemComponent";

const BallItem = ({ball}) => {
    return (
        <BallItemComponent ball={ball} price={ball.price} allowRouteOnClick={true}>
            <div className={'ball_item_buy basket_button_ball_item_buy'}>
                <BallItemBasketButton ballId={ball.id}/>
            </div>
        </BallItemComponent>
    );
};

export default BallItem;