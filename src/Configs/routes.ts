import { PageHome } from '@pages';
import { IRoute } from '@interfaces';
export const PATH_HOME = '/';
export const PATH_LOGIN = '/Login';
export const PATH_404 = '/*';

export const PATH_SIGNUP = '/sign-up';
export const PATH_ABOUT = '/about';
export const PATH_BLOG = '/blog';

export const routes: Array<IRoute> = [
  //home
  { path: PATH_HOME, component: PageHome, exact: true },

  //sign-up

  // { component: PageError404, exact: false, layout: LayoutError },
];
export const normalRoutes = [PATH_HOME, PATH_ABOUT, PATH_BLOG];

export const authRoutes = [PATH_404];

export const publicRoutes = [];
