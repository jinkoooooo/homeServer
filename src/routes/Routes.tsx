import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import AuthLayout from "../layouts/Auth";
import DashboardLayout from "../layouts/Dashboard";
import Page404 from "../pages/exception/Page404";
import {RouteChildType, RouteType} from "../types/routes";
import {useTypedSelector} from "../redux/reducers";
import MenuRoutes from "./MenuRoutes";


const childRoutes = (Layout: React.ElementType, routes: Array<RouteType>) =>
  routes.map(
    ({ component: Component, guard, children, path }, index: number) => {
      const Guard = guard || React.Fragment;

      return children ? (
        children.map((element, index: number) => {
          const Guard = element.guard || React.Fragment;

          return (
            <Route
              key={index}
              path={element.path}
              exact
              render={(props: RouteComponentProps) => (
                <Guard>
                  <Layout>
                    <element.component {...props} />
                  </Layout>
                </Guard>
              )}
            />
          );
        })
      ) : Component ? (
        <Route
          key={index}
          path={path}
          exact
          render={(props) => (
            <Guard>
              <Layout>
                <Component {...props} />
              </Layout>
            </Guard>
          )}
        />
      ) : null;
    }
  );


const Routes = () => {
    const userAuth = useTypedSelector(state => state.userAuth);

    return (<Router>
        <Switch>
            {childRoutes(DashboardLayout, MenuRoutes(userAuth.menus))}
            <Route
                render={() => (
                    <AuthLayout>
                        <Page404 />
                    </AuthLayout>
                )}
            />
        </Switch>
    </Router>);
}

export default Routes;
