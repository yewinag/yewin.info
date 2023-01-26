import { ILayout } from "@interfaces";
export const AppLayout = (props: ILayout) => {
    return <div>{props.children}</div>;
};
