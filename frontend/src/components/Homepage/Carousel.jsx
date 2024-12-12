import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "2%", md: "2%" });

  // Updated cards array with video added
  const cards = [
    "https://assets.wfcdn.com/im/61708351/resize-h566-w2000%5Ecompr-r85/3098/309899371/unlock_your_next_home_gem%3A_earn_rewards_every_time_you_shop.__309899371.jpg",
    "https://secure.img1-fg.wfcdn.com/dm/video/e72f8554-b1c5-42ac-89e2-1acf4a7b33d9/wfus-ca_2024_deliverybeforechristmas_hero-banner_desktop_1_motion.mp4", // Video added
  ];

  return (
    <Box
      position={"relative"}
      height={"410px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        icon={<ChevronLeftIcon />}
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        fontSize="30px"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        icon={<ChevronRightIcon />}
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        fontSize="30px"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box key={index} height={"400px"} position="relative">
            {url.endsWith(".mp4") ? ( // Check if the URL is a video
              <video
                src={url}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Box
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${url})`}
                height="100%"
                width="100%"
              />
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
