import React, {useState} from 'react';
import IncrementDecrementButton from "../Buttons/IncrementDecrementButton";
const BasketBallCounter = ({basketBall, changeCount}) => {

    const [ballCount, setBallCount] = useState(basketBall.count)

    const [incrementButtonDisabled,setIncrementButtonDisabled] = useState(basketBall.ball.count === basketBall.count)
    const [decrementButtonDisabled,setDecrementButtonDisabled] = useState(basketBall.count === 1)

    const increment = (event) => {
        event.stopPropagation()

        if (basketBall.ball.count <= basketBall.count+1){
            setIncrementButtonDisabled(true)
        }

        setBallCount(basketBall.count+1)
        changeCount(event, basketBall.count+1)

        setDecrementButtonDisabled(false)
    }

    const decrement = (event) => {
        event.stopPropagation()

        if (basketBall.count === 2){
            setDecrementButtonDisabled(true)
        }

        setBallCount(basketBall.count-1)
        changeCount(event, basketBall.count-1)

        if(basketBall.ball.count > basketBall.count-1){
            setIncrementButtonDisabled(false)
        }
    }

    return (
        <div className={'Basket_Ball_Item_Counter'}>
            <IncrementDecrementButton click={(event)=>{decrement(event)}} isIncrement={false} disabled={decrementButtonDisabled}/>
            <div className={'Basket_Ball_Item_Counter_Count'}>{ballCount}</div>
            <IncrementDecrementButton click={(event)=>{increment(event)}} disabled={incrementButtonDisabled}/>
        </div>
    );
};

export default BasketBallCounter;