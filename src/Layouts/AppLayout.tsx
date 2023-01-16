import { StyledContainer, StyledMain } from "@components";
import { ILayout } from "@interfaces";
export const AppLayout = (props: ILayout) => {
    return (
        <StyledMain>
            <StyledContainer>{props.children}</StyledContainer>
        </StyledMain>
    );
};
