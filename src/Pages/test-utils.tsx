import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import rootReducer from 'state/rootReducer';
import reducer, { RootState } from "../Redux/Slices";
interface WrapperProps {
    children?: React.ReactNode;
}

function render(ui: any, { route = "/", initialState = {} } = {}) {
    window.history.pushState({}, "Test page", route);
    const store = configureStore({ reducer: reducer, preloadedState: initialState });

    const Wrapper = ({ children }: WrapperProps) => {
        return (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );
    };

    return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
