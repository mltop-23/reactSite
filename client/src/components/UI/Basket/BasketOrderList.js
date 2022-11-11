import React from 'react';

import BasketOrderItem from "./BasketOrderItem";

const BasketOrderList = ({basketBalls}) => {
    return (
        <div className={'Basket_Ball_Item'}>
            <div >
                {basketBalls.map(basketBall =>
                    <BasketOrderItem  key={basketBall.id} basketBall={basketBall} />
                )}
            </div>
        </div>
    );
};

export default BasketOrderList;