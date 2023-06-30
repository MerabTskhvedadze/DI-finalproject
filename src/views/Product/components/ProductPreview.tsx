import { Image } from 'components/Image';
import { useState, useEffect } from 'react';

export function ProductPreview({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <>
      <div className='flex justify-center'>
        <Image src={currentImage} alt='Product' />
      </div>
      <div className='flex flex-wrap p-5 gap-5 max-h-[200px] overflow-auto'>
        {images.map((image: string, i: number) => (
          <img
            className='h-[90px] cursor-pointer border border-gray-100 rounded'
            src={image}
            key={i}
            onMouseDown={() => setCurrentImage(images[i])}
          />
        ))}
      </div>
    </>
  );
}
