import { useState, useEffect } from 'react';

export function ProductPreview({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setCurrentImage(undefined);

    const fetchImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      setCurrentImage(images[0]);
    };

    fetchImages();
  }, [images]);

  return (
    <>
      <div className='w-full'>
        {isLoading ? (
          <div className='h-[450px] bg-gray-200 animate-pulse' />
        ) : (
          <img className='m-auto h-[450px]' src={currentImage} alt='Product' />
        )}
      </div>
      <div className='flex flex-wrap justify-between p-5 gap-2'>
        {!isLoading &&
          images.map((image: string, i: number) => (
            <img
              className='h-[90px]'
              src={image}
              key={i}
              onClick={() => setCurrentImage(images[i])}
            />
          ))}
      </div>
    </>
  );
}
