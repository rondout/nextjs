import { Autoplay } from "swiper";
import { Box } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import InnerContent from "../layouts/InnerContent";
import "swiper/css";

const logoPaths = [
  "/home/company-logo-1.png",
  "/home/company-logo-2.png",
  "/home/company-logo-3.png",
  "/home/company-logo-4.png",
  "/home/company-logo-5.png",
  "/home/company-logo-6.png",
  "/home/company-logo-7.png",
  "/home/company-logo-8.png",
  "/home/company-logo-9.png",
  "/home/company-logo-10.png",
];

export default function CompanyList() {
  return (
    <InnerContent sx={{ height: 80, overflow: "hidden" }}>
      <Box sx={{ width: 1200, filter: "grayscale(100%)", userSelect: "none" }}>
        <Swiper
          // spaceBetween={120}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={6.5}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          loop
          modules={[Autoplay]}
        >
          {logoPaths.map((item) => (
            <SwiperSlide key={item}>
              <Box sx={{ height: 80 }} className="flex">
                <img src={item} height={64} alt={item}></img>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </InnerContent>
  );
}
