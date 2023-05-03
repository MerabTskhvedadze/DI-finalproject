import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import carouselImg1 from '@/assets/images/carousel_1.jpg';
import carouselImg2 from '@/assets/images/carousel_2.jpg';
import carouselImg4 from '@/assets/images/carousel_4.jpg';
import carouselImg5 from '@/assets/images/carousel_5.jpg';
import carouselVideo from '@/assets/images/carousel_vid.mp4';

import 'swiper/css';
import 'swiper/css/navigation';

export const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className='h-[58%]'
      >
        <SwiperSlide>
          <img src={carouselImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg2} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
          <video controls muted={true}>
            <source src={carouselVideo} type='video/mp4' />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselImg5} />
        </SwiperSlide>
      </Swiper>
      <div className='h-[50%] bg-gradient-to-b from-stone-900' />
    </div>
  );
};
