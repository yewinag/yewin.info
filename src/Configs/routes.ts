import { PageAbout, PageBlog, PageError404, PageHome, PageLogin, PageSignup } from "@pages";
import { IRoute } from "@interfaces";
import { LayoutError } from "@layouts";
export const PATH_HOME = "/";
export const PATH_LOGIN = "/Login";
export const PATH_404 = "/*";

export const PATH_SIGNUP = "/sign-up";
export const PATH_ABOUT = "/about";
export const PATH_BLOG = "/blog";

export const routes: Array<IRoute> = [
    //home
    { path: PATH_HOME, component: PageHome, exact: true },
    { path: PATH_ABOUT, component: PageAbout, exact: true },
    { path: PATH_BLOG, component: PageBlog, exact: true },
    { path: PATH_LOGIN, component: PageLogin, exact: true },
    { path: PATH_SIGNUP, component: PageSignup, exact: true },
    { component: PageError404, exact: false, layout: LayoutError },
];
export const normalRoutes = [PATH_HOME, PATH_ABOUT, PATH_BLOG];

export const authRoutes = [PATH_404];

export const publicRoutes = [];
