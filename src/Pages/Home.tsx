import { useTranslation } from "react-i18next";

export const PageHome = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("page.person_name")}</h1>
            <p>{t("page.person_desc")}</p>
            <section>
                <h3>{t("page.About")}</h3>
            </section>
            <section></section>
        </div>
    );
};
