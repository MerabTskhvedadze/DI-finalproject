import { Carousel } from './components/Carousel';

import { Card } from '@/components/Card';
import image1 from '@/assets/images/home_grid_1.jpg';
import image2 from '@/assets/images/home_grid_2.jpg';
import image3 from '@/assets/images/home_grid_3.jpg';
import image4 from '@/assets/images/home_grid_4.jpg';
import image5 from '@/assets/images/home_grid_5.jpg';
import image6 from '@/assets/images/home_grid_6.jpg';
import image7 from '@/assets/images/home_grid_7.jpg';
import image8 from '@/assets/images/home_grid_8.jpg';
import banner from '@/assets/images/banner_image_2.jpg';

const items = [
  {
    image: image1,
    title: 'We have a surprise for you',
    link: 'see terms and conditions',
    id: 1,
  },
  {
    image: image2,
    title: 'Watch The Rings of Power',
    link: 'Start streaming now',
    id: 2,
  },
  {
    image: image3,
    title: 'Unlimited streaming',
    link: 'Find out more',
    id: 3,
  },
  {
    image: image4,
    title: 'More titles to explore',
    link: 'Browse Kindle Unlimited',
    id: 4,
  },
  {
    image: image5,
    title: 'Shop Pet Supplies',
    link: 'See more',
    id: 5,
  },
  {
    image: image6,
    title: 'Spring Sale',
    link: 'See the deals',
    id: 6,
  },
  {
    image: image7,
    title: 'Echo Buds',
    link: 'See more',
    id: 7,
  },
  {
    image: image8,
    title: 'Family Plan: 3 month free',
    link: 'Learn more',
    id: 8,
  },
];

export default function Home() {
  return (
    <div className='min-w-[1000px] max-w-[1500px] m-auto'>
      testing
      <Carousel />
      <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
        {items.map(({ title, image, link, id }) => (
          <Card key={id} title={title} img={image} link={link} />
        ))}
        <div className='m-3 pt-8'>
          <img className='xl:hidden' src={banner} />
        </div>
      </div>
    </div>
  );
}
