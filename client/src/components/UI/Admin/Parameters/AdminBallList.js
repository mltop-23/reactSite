import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../App";
import {fetchBalls, deleteOneBall} from "../../../../http/ballApi";
import DeleteButton from "../../Buttons/DeleteButton";
import LogOutButton from "../../Buttons/LogOutButton";
import DeleteButtonRed from "../../Buttons/DeleteButtonRed";

const AdminBallList = () => {

    const {ballStore} = useContext(Context)

    const [balls, setBalls] = useState([])

    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
        fetchBalls().then(data => {
            ballStore.setBalls(data)
            setIsLoaded(true)
        })
    },[isLoaded])

    useEffect(()=>{
        setBalls(ballStore.balls)
    },[isLoaded])

    const deleteBall = (event,ballId) => {
        deleteOneBall(ballId).then(data => {
            setIsLoaded(false)
        })
    }

    return (
        <div style={{marginTop: '1rem'}} className={'Admin_BallList'}>
            <h2>Текущие мячи:</h2>
            {balls.map(ball =>
                <div key={ball.id} className={'Admin_BallListItem'}>
                    <p>{balls.indexOf(ball)+1}) {ball.name}</p>
                    <DeleteButtonRed click={(event)=>{deleteBall(event, ball.id)}}/>
                </div>
            )}
        </div>
    );
};

export default AdminBallList;