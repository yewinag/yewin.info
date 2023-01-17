import { render, screen } from "@testing-library/react";
import { PageHome } from "./Home";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils";
import { Provider } from "react-redux";
import { store } from "@redux";

jest.mock("react-i18next", () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

test("should first", async () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <PageHome />
            </ThemeProvider>
        </Provider>
    );
    const heading = screen.queryByText("page.person_name");
    const p = screen.queryByText("page.person_desc");
    await expect(heading).toBeInTheDocument();
    await expect(p).toBeInTheDocument();
});
