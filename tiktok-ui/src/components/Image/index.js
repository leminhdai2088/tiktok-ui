import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, ...props }, ref) {
  // khi ảnh lỗi sẽ dùng ảnh thay thế, thay thế gọi là fallback
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };
  return (
    <img
      ref={ref}
      className={cx('wrapper', className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
