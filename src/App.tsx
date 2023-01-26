import { Provider } from "react-redux";
import {
    store,
    // persistor
} from "@redux";
// import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyles } from "@components";
import { ThemeProvider } from "styled-components";
import { theme } from "@utils";
import { ModuleMain } from "@modules";
import "@translations/i18n";
import { PageHome } from "./Pages/Home";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyles />
            {/* <ThemeProvider theme={theme}> */}
            {/* <PersistGate loading={null} persistor={persistor}> */}
            {/* <ModuleMain /> */}
            {/* </PersistGate> */}
            <PageHome />
            {/* </ThemeProvider> */}
        </Provider>
    );
}

export default App;
