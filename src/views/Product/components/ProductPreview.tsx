import { useState, useEffect } from 'react';

export function ProductPreview({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <>
      <div className='w-full'>
        <img className='m-auto h-[450px]' src={currentImage} alt='Product' />
      </div>
      <div className='flex flex-wrap p-5 gap-5'>
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
