import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface ImageSwiperProps {
  images: string[];
  maxHeight?: number;
  isDarkMode: boolean;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  maxHeight = 400,
  isDarkMode,
}) => {
  const backgroundColour = isDarkMode
    ? "var(--lighterblack)"
    : "var(--lightgrey)";

  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
        maxHeight,
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        style={{ height: "100%" }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} style={{ height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: backgroundColour,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`Slide ${idx}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: 1,
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSwiper;
