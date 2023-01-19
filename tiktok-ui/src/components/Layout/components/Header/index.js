import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import routesConfig from '~/config/routes';

// import Tippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Menu from '../Popper/Menu';
import {
  CoinIcon,
  HelpIcon,
  KeyboardIcon,
  LanguageIcon,
  LetterBoxIcon,
  LiveIcon,
  MessageIcon,
  ModeDarkIcon,
  SettingIcon,
} from '~/components/icons';

import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
        {
          type: 'Ngôn ngữ',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Ngôn ngữ',
          code: 'en',
          title: 'Tiếng Anh',
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <ModeDarkIcon />,
    title: 'Chế độ tối',
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Xem hồ sơ',
    to: '/profile',
  },
  {
    icon: <CoinIcon />,
    title: 'Nhận xu',
    to: '/coins',
  },
  {
    icon: <LiveIcon />,
    title: 'LIVE Studio',
    to: '/live',
  },
  {
    icon: <SettingIcon />,
    title: 'Cài đặt',
    to: '/setting',
  },

  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Đăng xuất',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = true;

  // thẻ cha trong 1 component thì thêm class wrapper
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo-link')}>
          <img src={images.logo} alt="logo tiktok" />
        </Link>

        {/* search */}
        <Search />

        {/* actions */}
        <div className={cx('actions')}>
          <Button iconLeft={<FontAwesomeIcon icon={faPlus} />} btnDefault size="medium">
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <>
                <Tippy content="Hộp thư" placement="bottom">
                  <button className={cx('action-btn', 'letter-icon')}>
                    <LetterBoxIcon width="3.6rem" height="3.6rem" />
                    <span className={cx('qty-message-letter')}>21</span>
                  </button>
                </Tippy>
              </>

              <Menu items={userMenu} onChange={handleMenuChange}>
                <Image
                  className={cx('avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ca5d8dff51c26bad7f8841b37e5bd65e~c5_720x720.jpeg?x-expires=1673856000&x-signature=IHC5wUptTfaqrjNjmFmd8h35a%2FA%3D"
                  alt="avatar user"
                />
              </Menu>
            </>
          ) : (
            <>
              <Button primary size="medium">
                Đăng nhập
              </Button>

              {/* more */}
              <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
