import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import bannerImgOne from 'assets/images/bannerImgOne.jpg';
import bannerImgTwo from 'assets/images/bannerImgTwo.jpg';
import bannerImgThree from 'assets/images/bannerImgThree.jpg';
import bannerImgFour from 'assets/images/bannerImgFour.jpg';
import bannerImgFive from 'assets/images/bannerImgFive.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import { Image } from 'components/Image';

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
          <Image src={bannerImgOne} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImgTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImgThree} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImgFour} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={bannerImgFive} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
