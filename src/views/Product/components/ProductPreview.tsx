import { useState, useEffect } from 'react';

export function ProductPreview({ images }: { images: string[] }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setIsLoading(true);
    const getImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      setCurrentImage(images[0]);
    };
    getImages();
  }, [images]);

  if (isLoading) {
    return <div className='h-[450px] bg-gray-200 animate-pulse' />;
  }

  return (
    <>
      <div className='w-full'>
        <img className='m-auto h-[450px]' src={currentImage} alt='Product' />
      </div>
      <div className='flex flex-wrap justify-between p-5 gap-2'>
        {images.map((image: string, i: number) => (
          <img
            className='h-[90px]'
            src={image}
            key={i}
            onMouseDown={() => setCurrentImage(images[i])}
          />
        ))}
      </div>
    </>
  );
}
