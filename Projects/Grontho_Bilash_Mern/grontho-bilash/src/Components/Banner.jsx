


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = () => {


    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])
    return (
        <div className=''>
            <Swiper pagination={true} modules={[Pagination]} >
                <SwiperSlide className='' >

                    <img data-aos="fade-right" data-aos-delay="100" className='object-cover w-full h-full object-center ' src="https://demo.fieldthemes.com/bookshop/demo10/modules/revsliderprestashop/uploads/slider1-h10.jpg" alt="banner 01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://demo.fieldthemes.com/bookshop/demo10/modules/revsliderprestashop/uploads/slider2-h10.jpg" alt="banner 01" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>

            </Swiper>

        </div >
    );
};

export default Banner;