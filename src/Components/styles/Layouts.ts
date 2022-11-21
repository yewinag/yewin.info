import styled from "styled-components";

export const StyledSection = styled.section`
    position: fixed;
    width: 100%;
    z-index: 99;
    border-bottom-width: 2px;
    border-bottom-color: hsl(57, 6%, 90.7%);
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 4%);
    top: 0;
`;
export const StyledContainer = styled.div`
    max-width: ${(p) => p.theme.widths.width_48};
    margin: auto;
    padding: 0 ${(p) => p.theme.space.rem_2};
`;
