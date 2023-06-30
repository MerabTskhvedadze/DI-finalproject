import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ImageProps = {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
};

export const Image = ({ alt, height, src, width }: ImageProps) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    height={height}
    width={width}
    effect='blur'
  />
);
