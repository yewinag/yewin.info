import { createSlice } from "@reduxjs/toolkit";

import { RootState } from ".";

interface IState {
    isAuth: boolean;
}

const initialState: IState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        resetAuth: (state) => {
            state.isAuth = false;
        },
    },
});

export const { resetAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
