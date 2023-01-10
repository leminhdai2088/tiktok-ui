import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

// Link: to, a: href, button: onClick
function Button({
  primary = false,
  outline = false,
  btnDefault = false,
  rounded = false,
  size,
  to,
  href,
  onClick,
  disabled = false,
  children,
  iconLeft,
  iconRight,
  ...passProps
}) {
  let Comp = 'button';
  const classes = cx('wrapper', {
    primary,
    outline,
    [size]: size,
    btnDefault,
    disabled,
    rounded,
  });

  const props = {
    onClick,
    ...passProps,
  };

  // remove event listener when disable button
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }
  return (
    <Comp className={classes} {...props}>
      {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
      <span className={cx('name-btn')}>{children}</span>
      {iconRight && <span className={cx('icon')}>{iconRight}</span>}
    </Comp>
  );
}

export default Button;
