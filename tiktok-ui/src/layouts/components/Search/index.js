import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServive from '~/Services/searchService';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';

import styles from './Search.module.scss';

import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 600);

  useEffect(() => {
    // nếu chuỗi tìm kiếm rỗng thì thoát hàm useEffect
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    // encodeURIComponent: mã hóa các ký tự bị trùng trên URL để ko bị sai cấu trúc URL
    const fetchAPI = async () => {
      setLoading(true);

      const result = await searchServive.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchAPI();

    // request
    //   .get('users/search', {
    //     params: {
    //       q: debounced,
    //       type: 'less',
    //     },
    //   })
    //   .then((users) => {
    //     setSearchResult(users.data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }, [debounced]);

  const handleClearTextSearch = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChangeInput = (e) => {
    const seacrchValueInput = e.target.value;
    if (!seacrchValueInput.startsWith(' ')) {
      setSearchValue(e.target.value);
    }
  };

  return (
    //to avoid warning Tippy
    <div>
      <HeadlessTippy
        // cho phép người dùng thao tác với nội dung render
        interactive
        // điều hiện quyết định tippy có được render hay không(visible = true)
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Tài khoản</h4>
              {searchResult.map((user) => (
                <AccountItem key={user.id} data={user} />
              ))}
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
            onChange={handleChangeInput}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClearTextSearch}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon width="2.4rem" height="2.4rem" />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
