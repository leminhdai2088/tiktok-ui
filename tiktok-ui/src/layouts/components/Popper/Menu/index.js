import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';

import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaulFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaulFn, ...passProps }) {
  // giá trị khởi tạo là 1 mảng chứa object là dữ liệu của trang hiện tại
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      // kiểm tra xem object hiện tại có phần tử children hay không
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // nếu có thì push object children vào cuối mảng
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {/* onBack được gọi sẽ xóa phần tử cuối mảng(children) */}
            {history.length > 1 && (
              <Header
                title="Ngôn ngữ"
                onBack={() => {
                  // cắt từ phần tử đầu đến phần tử kế cuối
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-scrollable')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
      {...passProps}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
