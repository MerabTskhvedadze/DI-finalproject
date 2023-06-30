import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import bannerImgOne from 'assets/images/bannerImgOne.jpg';
import bannerImgTwo from 'assets/images/bannerImgTwo.jpg';
import bannerImgThree from 'assets/images/bannerImgThree.jpg';
import bannerImgFour from 'assets/images/bannerImgFour.jpg';
import bannerImgFive from 'assets/images/bannerImgFive.jpg';
import 'swiper/css';
import 'swiper/css/navigation';

export const Carousel = () => {
  return (
    <div className='h-[600px] w-[700px] sm:w-[800px] md:w-[1020px] lg:w-[1500px] mx-auto'>
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
          <img src={bannerImgOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgFour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImgFive} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
