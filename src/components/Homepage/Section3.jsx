import React, { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Section3 = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      url: "https://assets.wfcdn.com/im/51552114/scale-h608-w608%5Ecompr-r85/2814/281489229/default_name.jpg",
      heading: "Area rugs",
      description: "Set a comfortable foundation.",
    },
    {
      url: "https://assets.wfcdn.com/im/06188475/scale-h608-w608%5Ecompr-r85/2814/281489370/default_name.jpg",
      heading: "Mattresses",
      description: "Find the one that fits your sleep style",
    },
    {
      url: "https://assets.wfcdn.com/im/68015569/scale-h608-w608%5Ecompr-r85/2723/272368851/default_name.jpg",
      heading: "Dressers",
      description: "Start your organized era here.",
    },
    {
      url: "https://assets.wfcdn.com/im/72819156/scale-h608-w608%5Ecompr-r85/2814/281489418/default_name.jpg",
      heading: "Sheet sets",
      description: "In every material, size and style",
    },
  ];
  return (
    <Box pl={"70px"} pr={"70px"} pt={"40px"}>
      <Text fontWeight={"bold"} fontSize={"3xl"}>
        Bliss out your bedroom
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
    </Box>
  );
};

export default Section3;
