"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-[340px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            
          }}
          
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full "
        >
          <SwiperSlide>
            <Link href={"#"} className="w-full h-full ">
              <img
                src="https://http2.mlstatic.com/D_NQ_841042-MLA72434352173_102023-OO.webp"
                alt=""
                loading="lazy"
                className="h-full w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"} className="w-full h-full ">
              <img
                src="https://http2.mlstatic.com/D_NQ_778411-MLA72464572829_102023-OO.webp"
                alt=""
                className="h-full w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"#"} className="w-full h-full ">
              <img
                src=" https://http2.mlstatic.com/D_NQ_908722-MLA72367628728_102023-OO.webp"
                alt=""
                className="h-full w-full"
              />
            </Link>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
};
