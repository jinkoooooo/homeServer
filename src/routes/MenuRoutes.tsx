import {RouteChildType, RouteType} from "../types/routes";
import {
    Codesandbox,
    Monitor,
    ShoppingCart,
    PieChart,
    Sliders,
    Users, IconProps, Calendar, Grid, Shield, Play, Smartphone, GitPullRequest,
} from "react-feather";
import React from "react";
import async from "../components/Async";

// DashBoard
const Dashboard = async(() => import("../pages/dashboard/Dashboard"));
// Shopping
const Mandarin = async(() => import("../pages/shopping/Mandarin"));
const OperSearch = async(() => import("../pages/shopping/OperSearch"));


export const MenuRoutes = (): Array<RouteType> => {
    let routeMenus: Array<RouteType> = [];

    routeMenus.push(
        {
            id: "DashBoard",
            path: "/",
            header: "Test",
            icon: <Sliders/>,
            component: Dashboard,
            children: null,
        },
        {
            id: "Shopping",
            path: "/Shopping",
            header: "Shopping",
            icon: <Sliders/>,
            component: null,
            children: [
                {
                    path: "/Shopping/Mandarin",
                    name: "서귀포감귤",
                    component: Mandarin,
                },
                {
                    path: "/Shopping/OperSearch",
                    name: "주문조회",
                    component: OperSearch,
                }
            ],
        }
    );

    return routeMenus;
}

export default MenuRoutes;