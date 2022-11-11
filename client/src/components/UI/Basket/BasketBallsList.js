import React from 'react';
import BasketBallItem from "./BasketBallItem";

const BasketBallsList = ({basketBalls, deleteBasketBall, changeCount, select, unselect}) => {

    return (
        <div>
            {basketBalls.map(basketBall =>
                <BasketBallItem key={basketBall.id} basketBall={basketBall} deleteBasketBall={deleteBasketBall} changeCount={changeCount} select={select} unselect={unselect}/>
            )}
        </div>
    );
};

export default BasketBallsList;