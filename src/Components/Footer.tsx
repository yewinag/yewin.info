import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <p>{t("page.contact")}</p>
            <ul>
                <ol>twitter</ol>
                <ol>linkedin</ol>
                <ol>github</ol>
                <ol>youtube</ol>
            </ul>
            <p>{t("page.privacy")}</p>
        </div>
    );
};
