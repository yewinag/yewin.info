import styled from "styled-components";

export const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    .logo {
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline;
        flex: 1;
        padding: 0 10px;
        li {
            display: inline-block;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            padding: 10px;
            cursor: pointer;
        }
    }
    .left-icon {
    }
`;
