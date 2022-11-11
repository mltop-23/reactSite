import React, {useEffect, useState} from 'react';
import {getOneBall} from "../http/ballApi";
import BallItem from "../components/UI/Balls/BallItem";
import {useLocation} from "react-router-dom";
import BallItemBasketButton from "../components/UI/Buttons/BallItemBasketButton";
import OneBall from "../components/UI/OneBall/OneBall";

const BallPage = () => {

    const [ball, setBall] = useState({})

    const location = useLocation()

    useEffect(()=>{
        getOneBall(location.pathname[location.pathname.length-1]).then(data => {
            setBall(data)
        })
    },[])

    return (
        <div>
            <OneBall ball={ball}/>
        </div>
    );
};

export default BallPage;