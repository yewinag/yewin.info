import { screen } from "@testing-library/react";
import { PageHome } from "./Home";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils";
import { store } from "@redux";

import { render } from "./test-utils";

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
    render(<PageHome />, {
        initialState: {
            auth: {
                auth: true,
            },
        },
    });
    const heading = screen.queryByText("page.person_name");
    const p = screen.queryByText("page.person_desc");
    await expect(heading).toBeInTheDocument();
    await expect(p).toBeInTheDocument();
});
