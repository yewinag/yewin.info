import { ILayout } from "@interfaces";
import { Header, Footer } from "@components";
export const AppLayout = (props: ILayout) => {
    return <>{props.children}</>;
};
