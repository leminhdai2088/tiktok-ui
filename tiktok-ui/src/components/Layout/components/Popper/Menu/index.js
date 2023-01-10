import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  return (
    <Tippy
      interactive
      visible
      delay={[0, 700]}
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {items.map((item, index) => (
              <MenuItem key={index} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
