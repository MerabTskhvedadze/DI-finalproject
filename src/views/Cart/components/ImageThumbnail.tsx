type ImageThumbnailProps = {
  src: string;
};

export const ImageThumbnail = ({ src }: ImageThumbnailProps) => (
  <div className='w-[150px] h-[120px]'>
    <img src={src} className='w-full h-full rounded' alt='Product' />
  </div>
);
