import React from 'react';
import {useHistory} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, BALLS_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE} from "../../../utils/Consts";
import logo from "../../../Assets/Logo.png";
import HeaderNavBar from "../Header/HeaderNavBar";
const Footer = () => {

    const history = useHistory()

    const logoClick = (event) => {
        event.preventDefault()

        history.push(BALLS_ROUTE)
    }

        return (
            <div className={'Footer'}>
                <div className={'header_content Footer_content'}>
                    <HeaderNavBar/>
                    <p className={'Footer_rights'}>©2022 Все права защищены | All Rights Reserved</p>
                </div>
            </div>
        );
    };

export default Footer;