import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BALL_PAGE_ROUTE,
    BALLS_ROUTE,
    BASKET_ROUTE, CONTACTS_ROUTE,
    LOGIN_ROUTE,
    ORDER_PAGE_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/Consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Balls from "./pages/Balls";
import Auth from "./pages/Auth";
import BallPage from "./pages/BallPage";
import OrderPage from "./pages/OrderPage";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUTE,
        component: Basket
    },
    {
        path: ORDER_PAGE_ROUTE,
        component: OrderPage
    }
]

export const publicRoutes = [
    {
        path: BALLS_ROUTE,
        component: Balls
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: `${BALL_PAGE_ROUTE}/:id`,
        component: BallPage
    },
    {
        path: ABOUT_ROUTE,
        component: About
    },
    {
        path: CONTACTS_ROUTE ,
        component: Contacts
    },

]