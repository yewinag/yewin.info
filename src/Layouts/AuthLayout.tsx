import { ILayout } from "@interfaces";
export const AuthLayout = (props: ILayout) => {
    return <div>{props.children}</div>;
};
