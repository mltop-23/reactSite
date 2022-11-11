import React, {useContext, useEffect} from 'react';
import {Context} from "../../../App";
import LogOutButton from "../Buttons/LogOutButton";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../../../utils/Consts";
import {useHistory} from "react-router-dom";
import UserStore from "../../../store/UserStore";
import GreenButton from "../Buttons/GreenButton";
import BasketRouteButton from "../Buttons/BasketRouteButton";

const LogOut = ({visible,setVisible}) => {

    const history = useHistory()

    const {user,setUser} = useContext(Context)

    if (!visible)
        return null;

    const LogOutClick = (event) => {
        event.preventDefault()

        setVisible(event)

        setUser(new UserStore())
        user._isAuth = false
        localStorage.setItem('token', '')

        history.push(LOGIN_ROUTE)
    }

    const BasketRouteClick = (event) => {
        event.preventDefault()

        setVisible(event)

        history.push(BASKET_ROUTE)
    }

    return (
        <div className={'LogOut_Modal_Background'}
             onClick={(event)=> setVisible(event)}>
            <div className={'LogOut_Modal'}>
                <div className={'LogOut_Content'}
                     onClick={(event)=>{event.stopPropagation()}}>
                    <div className={'LogOut_User'}>
                        <p className={'LogOut_Name'}>{user.user.name}</p>
                        <p className={'LogOut_Email'}>{user.user.email}</p>
                        <p className={'LogOut_Email'} style={{marginTop: "5px"}}>{user.user.phone}</p>
                    </div>
                    <BasketRouteButton text='Моя Корзина' click={(event)=>BasketRouteClick(event)}/>
                    <LogOutButton click={(event) => LogOutClick(event)} text={'Выйти'}/>
                </div>
            </div>
        </div>
    );
};

export default LogOut;