import React, { useState } from "react";
import {
  Box,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Section2 = () => {
  let settings = {
    dots: true,
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
    "https://assets.wfcdn.com/im/34168222/scale-h1522-w1248%5Ecompr-r85/2841/284111847/default_name.jpg",
    "https://assets.wfcdn.com/im/03888067/scale-h1522-w1248%5Ecompr-r85/2841/284111857/default_name.jpg",
    "https://assets.wfcdn.com/im/41828469/scale-h1522-w1248%5Ecompr-r85/2841/284111871/default_name.jpg",
    "https://assets.wfcdn.com/im/69678886/scale-h1522-w1248%5Ecompr-r85/2841/284111865/default_name.jpg",
  ];
  return (
    <Box pl={"70px"} pr={"70px"} pt={"40px"}>
      <Text fontWeight={"bold"} fontSize={"3xl"}>
        Top picks for you
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
          {cards.map((url, index) => (
            <Box key={index} px="8px">
              <Box
                height={"400px"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${url})`}
                borderRadius="lg"
                cursor={"pointer"}
                _hover={{ border: "1px solid" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box p={"15px"} mt={"20px"} cursor={'pointer'} _hover={{border:'1px solid'}}>
        <Image
          src="https://assets.wfcdn.com/im/74815840/resize-h454-w2000%5Ecompr-r85/2816/281693157/rest_%26_relaxation_build_a_bedroom_sanctuary__281693157.jpg"
          borderRadius={"lg"}
        />
      </Box>
    </Box>
  );
};

export default Section2;
