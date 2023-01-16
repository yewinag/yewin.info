import { Route } from "react-router";

import { IRoute } from "@interfaces";
import { AppLayout } from "@layouts";
// import { authRoutes, publicRoutes } from "@configs";

export const ComponentAppRoute = (props: IRoute) => {
    //page props
    const { path, exact } = props;
    //page hook

    //WHAT: check user login
    const Component = props.component;
    const Layout = AppLayout;
    return (
        <Route
            path={path}
            exact={exact}
            render={() => (
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};
