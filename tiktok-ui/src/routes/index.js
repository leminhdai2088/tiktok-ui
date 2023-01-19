import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/components/Layout/components/Search';
import routesConfig from '~/config/routes';

// route không cần đăng nhập vẫn vào được
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    // @ là dấu cố định, nickname có thể thay đổi
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

// route cần đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
