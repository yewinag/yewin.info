import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <StyledFooter>
            <p>{t("page.contact")}</p>
            <ul>
                <ol>twitter</ol>
                <ol>linkedin</ol>
                <ol>github</ol>
                <ol>youtube</ol>
            </ul>
            <p>{t("page.privacy")}</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    max-width: ${(p) => p.theme.widths.width_48};
    margin: auto;
    padding: 0 ${(p) => p.theme.space.rem_2};
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
        padding: 0;
        margin: 0;
        display: inline;
        ol {
            display: inline-block;
            padding: 0;
        }
    }
`;
