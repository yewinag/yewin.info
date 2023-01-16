import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const PageHome = () => {
    const { t } = useTranslation();
    return (
        <StyledHome>
            <h1>{t("page.person_name")}</h1>
            <p>{t("page.person_desc")}</p>
            <section>
                <h3>{t("page.About")}</h3>
            </section>
        </StyledHome>
    );
};
const StyledHome = styled.div`
    padding: ${(p) => p.theme.space.rem_2} 0;
`;
