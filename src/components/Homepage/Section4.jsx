import React, { useState } from "react";
import {
  Badge,
  Box,
  Flex,
  IconButton,
  Image,
  Stat,
  StatNumber,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
const Section4 = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
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
  const top = useBreakpointValue({ base: "40%", md: "40%" });
  const side = useBreakpointValue({ base: "0%", md: "0%" });

  const showButtons = useBreakpointValue({ base: true, md: true });

  // These are the images used in the slide
  const cards = [
    {
      url: "https://assets.wfcdn.com/im/21808679/resize-h400-w400%5Ecompr-r85/1447/144747447/default_name.jpg",
      description: `12" x 12" Wood Interlocking Deck Tile
(Set of 27)`,
      price: "$3.10",
      oldPrice: "$5.85",
      reviewCount: 45,
      rating: 4,
    },
    {
      url: "https://assets.wfcdn.com/im/68630939/resize-h400-w400%5Ecompr-r85/2764/276489187/default_name.jpg",
      description: "Weddel Basilico Console Table",
      price: "$99.99",
      oldPrice: "$199.99",
      reviewCount: 20,
      rating: 5,
    },
    {
      url: "https://assets.wfcdn.com/im/72207900/resize-h400-w400%5Ecompr-r85/2686/268616684/default_name.jpg",
      description: `Ashwyn Heavy Duty Steel Slat Bed Frame with 18" High, Vintage Style, Anti Sway and Squeak Resistant`,
      price: "$60.89",
      oldPrice: "$75.00",
      reviewCount: 14,
      rating: 3,
    },
    {
      url: "https://assets.wfcdn.com/im/69523744/resize-h400-w400%5Ecompr-r85/1907/190720301/default_name.jpg",
      description:
        "Patio Outdoor Round Adirondack Plastic/Resin Side Table Weather Resistant End Table",
      price: "$59.99",
      oldPrice: "$129.99",
      reviewCount: 8,
      rating: 4,
    },
    {
      url: "https://assets.wfcdn.com/im/52863324/resize-h400-w400%5Ecompr-r85/2645/264568970/default_name.jpg",
      description: `67" Column Floor Lamp with Shelves, Solid Wood, USB Ports, Storage Drawer and Bulb Included`,
      price: "$99.99",
      oldPrice: "$199.99",
      reviewCount: 34,
      rating: 4,
    },
    {
      url: "https://assets.wfcdn.com/im/61773752/resize-h400-w400%5Ecompr-r85/2591/259121713/default_name.jpg",
      description: `Aliah Outdoor Side Table Adirondack Tables Weather Resistant Patio Table Plastic End Tables`,
      price: "$51.99",
      oldPrice: "$80.99",
      reviewCount: 187,
      rating: 4.5,
    },
    {
      url: "https://assets.wfcdn.com/im/84111806/resize-h400-w400%5Ecompr-r85/2254/225419143/default_name.jpg",
      description: `Kynnleigh Heavy-Duty Steel Slatted Bed Frame, 14"H, Anti-Sway, Underbed Storage`,
      price: "$95.99",
      oldPrice: "$184.99",
      reviewCount: 9,
      rating: 4.6,
    },
    {
      url: "https://assets.wfcdn.com/im/18166459/resize-h400-w400%5Ecompr-r85/2705/270549485/default_name.jpg",
      description: `Ashwyn Verret Reinforced High Load-Bearing Frame Type Iron Bed with Anti-Shaking Design`,
      price: "$95.99",
      oldPrice: "$110.00",
      reviewCount: 55,
      rating: 4.7,
    },
  ];
  return (
    <Box pl={"70px"} pr={"70px"} pt={"40px"}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Deals of the day
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
                position="relative"
                height={"240px"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${data.url})`}
                borderRadius="lg"
                cursor={"pointer"}
                _hover={{ border: "1px solid" }}
              >
                <Badge
                  position="absolute"
                  bottom="0px"
                  left="0px"
                  color={"white"}
                  bgColor="#990e35"
                >
                  Deal of the day
                </Badge>
              </Box>
              <Text>{data.description}</Text>
              <Flex direction="row" align="baseline">
                <Stat>
                  <StatNumber>{data.price}</StatNumber>
                </Stat>
                <Stat ml="2">
                  <StatNumber
                    color={"gray"}
                    fontSize={"0.9rem"}
                    textDecoration={"line-through"}
                  >
                    {data.oldPrice}
                  </StatNumber>
                </Stat>
              </Flex>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < data.rating ? "black.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  ({data.reviewCount})
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box mt={"60px"} cursor={'pointer'} _hover={{border:'1px solid'}}>
        <Image
          borderRadius={"lg"}
          src="https://assets.wfcdn.com/im/94229756/resize-h454-w2000%5Ecompr-r85/2815/281523599/kitchen_essentials_for_every_recipe_281523599.jpg"
        />
      </Box>
    </Box>
  );
};

export default Section4;
