import React from 'react';

const BasketOrderItem = ({basketBall}) => {
    if (basketBall)
        return (
            <div className={'Order_Page_Ball_Item'}>
                <p key={basketBall.id} className={'Basket_Order_List_Ball_Name'}>• {basketBall.ball.name}, {basketBall.count} шт. -   {basketBall.count*basketBall.ball.price} руб.</p>
            </div>
        );
};

export default BasketOrderItem;