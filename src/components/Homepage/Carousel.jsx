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
    
      // These are the breakpoints which changes the position of the
      // buttons as the screen size changes
      const top = useBreakpointValue({ base: "50%", md: "50%" });
      const side = useBreakpointValue({ base: "2%", md: "2%" });
    
      // These are the images used in the slide
      const cards = [
        "https://assets.wfcdn.com/im/41408020/resize-h566-w2000%5Ecompr-r85/2861/286138280/amber_lewis_x_loloi__286138280.jpg",
        "https://assets.wfcdn.com/im/18119869/resize-h566-w2000%5Ecompr-r85/2861/286156791/build_your_dream_space_now._pay_monthly.%2A%2A_afterpay_%2A%2Aterms_%26_conditions_apply._286156791.jpg",
        "https://www.syracuse.com/resizer/v2/Y4FAI5ITKJFM7HY5J3OACEDJY4.png?auth=ac87fe69341236351a8b4ce7658088ba45fed6dbf18c69b334f120f92efbf792&width=1280&quality=90",
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
      icon={<ChevronLeftIcon/>}
      colorScheme="gray"
      borderRadius="full"
      position="absolute"
      fontSize='30px'
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
      icon={<ChevronRightIcon/>}
      colorScheme="gray"
      borderRadius="full"
      position="absolute"
      fontSize='30px'
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
        <Box
          key={index}
          height={"400px"}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${url})`}
        />
      ))}
    </Slider>
  </Box>
  )
}

export default Carousel