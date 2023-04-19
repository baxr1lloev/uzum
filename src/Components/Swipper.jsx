import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Swipper = () => {



    return (
        <>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cgqmsq7g49devoadh810/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cgtbb0j57mg9720f43f0/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cgqg0d357mg9720egv60/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cghdvrjfkbipbv1u94ig/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex justify-center pt-[30px] select-none '>
                            <div className='w-[85%] flex justify-center  items-center'>
                                <img className='rounded-[12px]' src="https://images.uzum.uz/cgqfvnvg49devoadeuu0/main_page_banner.jpg" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
        </>

    );
};


export default Swipper;