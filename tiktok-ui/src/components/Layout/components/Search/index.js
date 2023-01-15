import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';

import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([0]);
    }, 0);
  }, []);

  const handleClearTextSearch = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
    console.log(showResult);
  };

  return (
    <HeadlessTippy
      // cho phép người dùng thao tác với nội dung render
      interactive
      // điều hiện quyết định tippy có được render hay không(visible = true)
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      //   onClickOutside là prop của Tippy
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClearTextSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon width="2.4rem" height="2.4rem" />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
