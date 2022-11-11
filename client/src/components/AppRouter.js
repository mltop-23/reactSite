import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {BALLS_ROUTE} from "../utils/Consts";
import {Context} from "../App";

const AppRouter = () => {

    const {user} = useContext(Context)

    return (
        <div className={'App_Router'}>
        <Switch>
            {user._isAuth && authRoutes.map(route =>
                <Route key={route.path} component={route.component} path={route.path} exact />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} component={route.component} path={route.path} exact />
            )}
            <Redirect to={BALLS_ROUTE}/>
        </Switch>
        </div>
    );
};

export default AppRouter;