import { ILayout } from "@interfaces";

export const LayoutError = (props: ILayout) => {
    return <div>{props.children}</div>;
};
