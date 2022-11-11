import React from 'react';
import basketPicture from "../../../Assets/Basket.png";

const BasketRouteButton = ({text,click}) => {
    return (
        <div className={'button ball_item_basket_button'} onClick={(event)=>{click(event)}}>
            <div style={{marginRight: "5px"}}>{text}</div>
            <img width={17.5}
                 height={17.5}
                 src={basketPicture}
            />
        </div>
    );
};

export default BasketRouteButton;