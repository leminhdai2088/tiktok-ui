import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7080373613567672322.jpeg?x-expires=1673276400&x-signature=U4DrGAdUHfbW8ozqrwyKwpyrdRc%3D"
        alt=" account"
      />
      <div className={cx('info')}>
        <p className={cx('id-name')}>
          <span>minhlangocthanh</span>
          <FontAwesomeIcon className={cx('blue-tick')} icon={faCheckCircle} />
        </p>
        <span className={cx('name')}>Trần Thanh7312</span>
      </div>
    </div>
  );
}

export default AccountItem;
