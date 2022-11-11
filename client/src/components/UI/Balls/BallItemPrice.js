import React from 'react';

const BallItemPrice = ({price}) => {
    return (
        <div className={'ball_item_price'}>
            {price + ' p.'}
        </div>
    );
};

export default BallItemPrice;