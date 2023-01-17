import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// route không cần đăng nhập vẫn vào được
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    // @ là dấu cố định, nickname có thể thay đổi
    path: '/@/:nickname',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

// route cần đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
