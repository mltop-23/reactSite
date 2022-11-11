import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, BALLS_ROUTE} from "../../../utils/Consts";
import {Context} from "../../../App";

const HeaderNavBar = () => {
    const {user} = useContext(Context)
    return (
        <div className={'header_navbar'}>
            <NavLink className={'header_navbar_link'}
                     to={BALLS_ROUTE}>Магазин</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={ABOUT_ROUTE}>О нас</NavLink>
            <NavLink className={'header_navbar_link'}
                     to={CONTACTS_ROUTE}>Контакты</NavLink>
            {user._user.role === "ADMIN" ?

                    <NavLink className={'header_navbar_link'}
                             to={ADMIN_ROUTE}>Админ
                    </NavLink>

                :
                <div></div>
            }
        </div>
    );
};

export default HeaderNavBar;