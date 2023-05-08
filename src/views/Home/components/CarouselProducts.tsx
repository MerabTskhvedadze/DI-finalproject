import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

import product1 from '@/assets/images/product_1.jpg';
import product2 from '@/assets/images/product_2.jpg';
import product3 from '@/assets/images/product_3.jpg';
import product4 from '@/assets/images/product_4.jpg';
import product5 from '@/assets/images/product_5.jpg';
import product6 from '@/assets/images/product_6.jpg';
import product7 from '@/assets/images/product_7.jpg';
import product8 from '@/assets/images/product_8.jpg';
import product9 from '@/assets/images/product_9.jpg';

export const CarouselProducts = () => {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
  ];

  return (
    <div className='bg-white m-3 '>
      <div className='text-2xl font-semibold p-3'>Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Link to='product' className='h-[250px] block'>
              <img
                src={product}
                alt={`Product ${i}`}
                className='h-full w-full'
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
