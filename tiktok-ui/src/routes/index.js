import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/layouts/components/Search';
import config from '~/config';

// route không cần đăng nhập vẫn vào được
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    // @ là dấu cố định, nickname có thể thay đổi
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
];

// route cần đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
