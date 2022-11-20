import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

interface IState {
    mobile: boolean;
    boxed: boolean;
    darkSidebar: boolean;
    sidebarPopup: boolean;
    sidebarIcons: boolean;
    collapsed: boolean;
    weakColor: boolean;
    optionDrawer: boolean;
    mobileDrawer: boolean;
    fullscreen: boolean;
    loading: boolean;
    spinning: boolean;
}

const initialState: IState = {
    mobile: false,
    boxed: false,
    darkSidebar: false,
    sidebarPopup: false,
    sidebarIcons: false,
    collapsed: false,
    weakColor: false,
    optionDrawer: false,
    mobileDrawer: false,
    fullscreen: false,
    loading: true,
    spinning: false,
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        resetApp: () => {
            return initialState;
        },
        setMobile: (state, action: PayloadAction<boolean>) => {
            state.mobile = action.payload;
        },
        setBoxed: (state, action: PayloadAction<boolean>) => {
            state.boxed = action.payload;
        },
        setDarkSidebar: (state, action: PayloadAction<boolean>) => {
            state.darkSidebar = action.payload;
        },
        setSidebarPopup: (state, action: PayloadAction<boolean>) => {
            state.sidebarPopup = action.payload;
        },
        setSidebarIcons: (state, action: PayloadAction<boolean>) => {
            state.sidebarIcons = action.payload;
        },
        setCollapsed: (state, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload;
        },
        setWeakColor: (state, action: PayloadAction<boolean>) => {
            state.weakColor = action.payload;
        },
        setOptionDrawer: (state, action: PayloadAction<boolean>) => {
            state.optionDrawer = action.payload;
        },
        setMobileDrawer: (state, action: PayloadAction<boolean>) => {
            state.mobileDrawer = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSpinning: (state, action: PayloadAction<boolean>) => {
            state.spinning = action.payload;
        },
        setFullscreen: (state) => {
            const element = document.querySelector("#root");
            //@ts-ignore
            const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
            //@ts-ignore
            element.requestFullScreen =
                //@ts-ignore
                element.requestFullScreen ||
                //@ts-ignore
                element.webkitRequestFullScreen ||
                //@ts-ignore
                element.mozRequestFullScreen ||
                function () {
                    return false;
                };
            //@ts-ignore
            document.cancelFullScreen =
                //@ts-ignore
                document.cancelFullScreen ||
                //@ts-ignore
                document.webkitCancelFullScreen ||
                //@ts-ignore
                document.mozCancelFullScreen ||
                function () {
                    return false;
                };
            //@ts-ignore
            isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();

            state.fullscreen = !isFullscreen;
        },
    },
});

export const {
    resetApp,
    setMobile,
    setBoxed,
    setDarkSidebar,
    setCollapsed,
    setFullscreen,
    setMobileDrawer,
    setOptionDrawer,
    setSidebarIcons,
    setSidebarPopup,
    setWeakColor,
    setLoading,
    setSpinning,
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
