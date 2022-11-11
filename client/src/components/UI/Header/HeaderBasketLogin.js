import React, {useContext, useState} from 'react';
import basket from '../../../Assets/Basket.png'
import login from '../../../Assets/Login.png'
import {useHistory} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../../../utils/Consts";
import {Context} from "../../../App";
import LogOut from "../LogOut/LogOut";

const HeaderBasketLogin = () => {

    const history = useHistory()

    const {user} = useContext(Context)

    const [logOutVisible, setLogOutVisible] = useState(false)

    const toBasket = (event) => {
        event.preventDefault()

        history.push(BASKET_ROUTE)
    }

    const toLogin = (event) => {
        event.preventDefault()

        if (!user.isAuth)
            history.push(LOGIN_ROUTE)
        else
            setLogOutVisible(true)
    }

    const closeModal = (event) => {
        event.stopPropagation()
        setLogOutVisible(false)
    }

    return (
        <div className={'header_basket_login'}>
            <img className={'header_button'}
                 src={basket}
                 style={{marginRight:"1rem"}}
                 onClick={(event)=>toBasket(event)}/>
                <img className={'header_button'}
                     style={{position: "relative"}}
                     src={login}
                     onClick={(event)=>toLogin(event)}/>
                <LogOut visible={logOutVisible} setVisible={closeModal}/>
        </div>
    );
};

export default HeaderBasketLogin;