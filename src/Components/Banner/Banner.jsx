
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='my-5 mt-20'>
           <div className=''>
           <div className='mb-5'>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/HTtjCN0/img4.jpg " alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/Tbg3S2Y/img3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/yPdGH2m/img2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/BsXFLb7/bannerimg1.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
           </div>
           <div className='h-[100vh]'></div>
        </div>
    );
};


export default Banner;