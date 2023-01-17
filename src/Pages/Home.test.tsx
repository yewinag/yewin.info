import { render, screen } from "@testing-library/react";
import { PageHome } from "./Home";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils";

jest.mock("react-i18next", () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

test("should first", () => {
    render(
        <ThemeProvider theme={theme}>
            <PageHome />
        </ThemeProvider>
    );
    const heading = screen.queryByText("page.person_name");
    const p = screen.queryByText("page.person_desc");
    expect(heading).toBeInTheDocument();
    expect(p).toBeInTheDocument();
});
