import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "@configs";
import { ComponentAppRoute } from "@components";
import { IRoute } from "@interfaces";
export const ModuleMain = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((e: IRoute, key) => (
                    <ComponentAppRoute key={key} {...e} />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
