import React, { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Section5 = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "2%", md: "2%" });

  const showButtons = useBreakpointValue({ base: true, md: false });

  // These are the images used in the slide
  const cards = [
    {
      url: "https://assets.wfcdn.com/im/49161998/scale-h878-w1248%5Ecompr-r85/2840/284096651/default_name.jpg",
      heading: "All-American accents",
      description: "Red, white, and blue – remixed your way.",
    },
    {
      url: "https://assets.wfcdn.com/im/37811085/scale-h878-w1248%5Ecompr-r85/2840/284096650/default_name.jpg",
      heading: "Birthday party goals",
      description: "Bright and bold picks made for the season of celebrations.",
    },
    {
      url: "https://assets.wfcdn.com/im/55182650/scale-h878-w1248%5Ecompr-r85/2852/285207324/default_name.jpg",
      heading: "Garden party vibes",
      description: "Floral and rattan accents are always a fantastic choice.",
    },
  ];
  return (
    <Box pl={"70px"} pr={"70px"} pt={"40px"}>
      <Text fontWeight={"bold"} fontSize={"3xl"}>
        It's outdoor dining season
      </Text>
      <Text mt={"10px"}>
        Make the most of it with colorful and celebratory tabletops.
      </Text>

      <Box
        position={"relative"}
        height={"410px"}
        width={"full"}
        overflow={"hidden"}
        mt={"20px"}
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
        {showButtons && (
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
          />
        )}
        {/* Right Icon */}
        {showButtons && (
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
          />
        )}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((data, index) => (
            <Box key={index} px="8px">
              <Box
                height={"300px"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${data.url})`}
                borderRadius="lg"
                cursor={"pointer"}
                _hover={{ border: "1px solid" }}
              />
              <Heading size="md" mt={"25px"} mb={"15px"}>
                {data.heading}
              </Heading>
              <Text>{data.description}</Text>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box mt={"50px"}>
        <Image
          borderRadius={"lg"}
          src="https://assets.wfcdn.com/im/26793381/resize-h454-w2000%5Ecompr-r85/2851/285192152/it%27s_all_in_the_details._shop_decor_%26_more_285192152.jpg"
        />
      </Box>
    </Box>
  );
};

export default Section5;