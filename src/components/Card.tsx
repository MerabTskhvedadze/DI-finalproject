import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  img: string;
  link: number;
};

export const Card = ({ title, img, link }: CardProps) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3 '>
      <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>{title}</div>
      <div className='h-[300px] m-4'>
        <img src={img} className='h-full w-full object-cover' />
      </div>
      <Link
        to={`product/${link}`}
        className='text-xs xl:text-sm text-blue-400 ml-4'
      >
        See more
      </Link>
    </div>
  );
};
