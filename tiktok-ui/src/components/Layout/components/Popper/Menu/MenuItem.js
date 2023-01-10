import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
  return (
    <div>
      <Button iconLeft={data.icon} className={cx('menu-item')} to={data.to}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;