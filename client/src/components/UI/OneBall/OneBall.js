import React from 'react';
import BallItemBasketButton from "../Buttons/BallItemBasketButton";
import OneBallParameters from "./OneBallParameters";
import OneBallImage from "./OneBallImage";

const OneBall = ({ball, visible, setVisible, showBasketButton = true}) => {

    if (!visible)
        return null;

    let basketButton
    if (showBasketButton)
        basketButton = <BallItemBasketButton ballId={ball.id} ClassName={'Buy_Button'}/>


    return (
        <div className={'Ball_Page_Modal Ball_Page_Modal_Active'}
             onClick={(event)=> setVisible(event)}>
            <div className={'Ball_Page'}
                 onClick={(event) => {event.stopPropagation()}}>
                <OneBallImage ballImage={ball.image}/>
                    <div className={'Ball_Page_Info'}>
                        <h2 className={'Ball_Page_Name'}>{ball.name}</h2>
                        <h1 className={'Ball_Page_Price'}>{ball.price}р.</h1>
                        <OneBallParameters ballInfo={ball.ball_info}/>
                        {basketButton}
                    </div>
            </div>
        </div>
    );
};

export default OneBall;