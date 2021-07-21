import {RouteChildType, RouteType} from "../types/routes";
import {
  Codesandbox,
  Monitor,
  ShoppingCart,
  PieChart,
  Sliders,
  Users, IconProps, Calendar, Grid, Shield, Play, Smartphone, GitPullRequest,
} from "react-feather";
import {UserMenu} from "../model/Menu";
import React from "react";
import async from "../components/Async";
import Routes from "./Routes";

// DashBoard
const Dashboard = async(() => import("../pages/dashboard/Dashboard"));
const Error404 = async(() => import("../pages/exception/Page404"));


type ComponentDictionary = {
  key: string;
  component: any;
};

export const MenuRoutes = (menus: UserMenu[]) => {
  let routeComponent: ComponentDictionary[] = [];
  //routeComponent.push({key: "order.storage", component: Storage});


  const searchComponent = (key: string) => {
    let searchData = routeComponent.find(i => i.key == key);

    if (searchData != undefined) {
      return searchData.component;
    } else {
      return Error404;
    }
  };

  function menuIconSwitching(menuCode:string) {

    switch (menuCode) {
      case "2": // master
        return <Codesandbox/>;
        break;
      case "3": // device
        return <Smartphone/>;
        break;
      case "4": // operation
        return <GitPullRequest/>;
        break;
      case "5": // order
        return <Calendar/>;
        break;
      case "6": // stock
        return <Grid/>;
        break;
      case "7": // scada
        return <Shield/>;
        break;
      case "8": // simulation
        return <Play/>;
        break;
      default:
        return <Monitor/>;
        break;
    }
  }

  function routeMenuSeting(): Array<RouteType> {
    let routeMenus: Array<RouteType> = [];

    routeMenus.push({
      id: "DashBoard",
      path: "/homeServer",
      header: "Test",
      icon: <Sliders/>,
      component: Dashboard,
      children: null,
    });

    for (let menu of menus) {

      if (menu.children) {

        routeMenus.push({
          id: menu.name,
          path: "/" + menu.viewName.toString().replace(".", "/"),
          header: "Test",
          icon: menuIconSwitching(menu.code.toString()),
          component: searchComponent(menu.viewName),
          children: ChildrenMenuSetting(menu.children),
        })

      } else {
        routeMenus.push({
          id: menu.name,
          path: "/" + menu.viewName.toString().replace(".", "/"),
          header: "Test",
          icon: <Monitor/>,
          component: null,
          children: null,
        })
      }
    }

    return routeMenus;
  };

  const ChildrenMenuSetting = (childMenu: UserMenu[]) => {
    let childRouteMenu: Array<RouteChildType> = [];

    for (let menu of childMenu) {
      childRouteMenu.push({
        path: "/" + menu.viewName.toString().replace(".", "/"),
        name: menu.name,
        component: searchComponent(menu.viewName),
      })
    }

    return childRouteMenu;
  };


  return routeMenuSeting();
}

export default MenuRoutes;