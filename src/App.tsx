import { Provider } from "react-redux";
import { store, persistor } from "@redux";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "@utils";
import { ModuleMain } from "@modules";
import "@translations/i18n";
import { PageHome } from "./Pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ModuleMain />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    );
}

export default App;
