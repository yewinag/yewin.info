import { StyledContainer } from "@components";
import { ILayout } from "@interfaces";
import styled from "styled-components";
export const AppLayout = (props: ILayout) => {
    return (
        <StyledMain>
            <StyledContainer>{props.children}</StyledContainer>
        </StyledMain>
    );
};
const StyledMain = styled.main`
    background: #f9f9f8;
    margin-top: 66px;
    min-height: 94vh;
`;
