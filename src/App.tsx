import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "@redux";
import { PersistGate } from "redux-persist/integration/react";
import { useTranslation } from "react-i18next";
import "@translations/i18n";
function App() {
    const { t } = useTranslation();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>{t("page.title")}</p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
