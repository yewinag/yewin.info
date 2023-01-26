import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
import authReducer from "./auth";

const productReducer = combineReducers({
    auth: authReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "RESET") {
        // reset state
        state = {} as RootState;
        // reset local storage
        localStorage.clear();
    }
    return productReducer(state, action);
};
export default rootReducer;
