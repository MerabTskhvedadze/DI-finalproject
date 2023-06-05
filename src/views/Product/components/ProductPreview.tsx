export function ProductPreview({ images }: { images: string[] }) {
  return (
    <>
      <div className='w-full'>
        <img className='m-auto max-h-[500px]' src={images[0]} />
      </div>
      <div className='flex flex-wrap justify-between p-5 gap-2 '>
        {images?.map((image: string) => (
          <img className='h-[90px]' src={image} />
        ))}
      </div>
    </>
  );
}
