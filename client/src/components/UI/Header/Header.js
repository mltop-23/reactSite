import React from 'react';
import logo from '../../../Assets/Logo.png'
import {useHistory} from "react-router-dom";
import {BALLS_ROUTE} from "../../../utils/Consts";
import HeaderNavBar from "./HeaderNavBar";
import HeaderBasketLogin from "./HeaderBasketLogin";

const Header = (props) => {

    const history = useHistory()

    const logoClick = (event) => {
        event.preventDefault()

        history.push(BALLS_ROUTE)
    }

        return (
        <div className={'header'} >
            <div className={'header_content'}>
                <div className={'header_logo'}
                     onClick={(event) => logoClick(event)}>
                    <img alt={'BestBalls'} src={logo}/>
                </div>
                <HeaderNavBar/>
                <HeaderBasketLogin/>
            </div>
        </div>

    );
};

export default Header;