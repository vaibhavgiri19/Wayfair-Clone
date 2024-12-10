import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Section7 = () => {
  // These are the images used in the slide
  const cards = [
    {
      url: "https://assets.wfcdn.com/im/23016956/scale-h860-w1248%5Ecompr-r85/2813/281328682/default_name.jpg",
      heading: "Air quality",
      description: "Freshen up your space",
    },
    {
      url: "https://assets.wfcdn.com/im/88964217/scale-h860-w1248%5Ecompr-r85/2813/281328685/default_name.jpg",
      heading: "Ceiling & portable fans",
      description: "Beat the heat",
    },
  ];

  const cards2 = [
    {
      url: "https://assets.wfcdn.com/im/16012632/scale-h664-w1142%5Ecompr-r85/2352/235224551/default_name.jpg",
      heading: "Contributing to all the homes we share",
      description:
        "Learn more about our DEI, Social Impact, and Sustainability Work →",
    },
    {
      url: "https://assets.wfcdn.com/im/38714458/scale-h664-w1142%5Ecompr-r85/2352/235224553/default_name.jpg",
      heading: "Building suplier diversity",
      description: "Learn more about the makers behind the businesses →",
    },
    {
      url: "https://assets.wfcdn.com/im/61416284/scale-h664-w1142%5Ecompr-r85/2352/235224555/default_name.jpg",
      heading: "All things home, sustainably",
      description: "Discover so many (easy!) ways to live more sustainably →",
    },
  ];

  const cards3 = [
    {
      url: "https://assets.wfcdn.com/im/16504501/timg-h482-w482%5Ecompr-r85/2745/274579841/default_name.jpg",
      description:
        "The BIG Outdoor Sale",
    },{
        url: "https://assets.wfcdn.com/im/72474007/timg-h482-w482%5Ecompr-r85/9847/98477101/default_name.jpg",
        description:
          "Furniture",
      },{
        url: "https://assets.wfcdn.com/im/31073905/timg-h482-w482%5Ecompr-r85/9847/98477118/default_name.jpg",
        description:
          "Outdoor",
      },{
        url: "https://assets.wfcdn.com/im/18845349/timg-h482-w482%5Ecompr-r85/1323/132350539/default_name.jpg",
        description:
          "Bedding & Bath",
      },{
        url: "https://assets.wfcdn.com/im/60495043/timg-h482-w482%5Ecompr-r85/9847/98477095/default_name.jpg",
        description:
          "Decor & Pillows",
      },{
        url: "https://assets.wfcdn.com/im/53619289/timg-h482-w482%5Ecompr-r85/9847/98477121/default_name.jpg",
        description:
          "Rugs",
      },{
        url: "https://assets.wfcdn.com/im/65126644/timg-h482-w482%5Ecompr-r85/9847/98477115/default_name.jpg",
        description:
          "Lighting",
      },{
        url: "https://assets.wfcdn.com/im/06982384/timg-h482-w482%5Ecompr-r85/9847/98477108/default_name.jpg",
        description:
          "Home Improvement",
      },{
        url: "https://assets.wfcdn.com/im/30468703/timg-h482-w482%5Ecompr-r85/9847/98477082/default_name.jpg",
        description:
          "Appliances",
      },{
        url: "https://assets.wfcdn.com/im/95623378/timg-h482-w482%5Ecompr-r85/2692/269209725/default_name.jpg",
        description:
          "Kitchen",
      },{
        url: "https://assets.wfcdn.com/im/07766877/timg-h482-w482%5Ecompr-r85/9847/98477084/default_name.jpg",
        description:
          "Baby & Kids",
      },{
        url: "https://assets.wfcdn.com/im/80433450/timg-h482-w482%5Ecompr-r85/9847/98477124/default_name.jpg",
        description:
          "Organization",
      },{
        url: "https://assets.wfcdn.com/im/41449204/timg-h482-w482%5Ecompr-r85/2320/232096871/default_name.jpg",
        description:
          "Custom Cabinetry",
      },{
        url: "https://assets.wfcdn.com/im/61546677/timg-h482-w482%5Ecompr-r85/1321/132124505/default_name.jpg",
        description:
          "Pet",
      },
  ];

  return (
    <Box
      pl={["20px", "40px", "70px"]}
      pr={["20px", "40px", "70px"]}
      pt={"40px"}
    >
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Keep your cool
        </Text>

        <SimpleGrid
          spacing={4}
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
          mt={"20px"}
        >
          {cards.map((ele, i) => (
            <Card
              key={i}
              _hover={{
                borderColor: "black",
                borderWidth: "1px",
                boxShadow: "xl",
                cursor: 'pointer'
              }}
              shadow={"none"}
            >
              <CardHeader>
                <Image src={ele.url} borderRadius={"lg"} />
              </CardHeader>
              <CardBody>
                <Heading fontSize={"1.4rem"}>{ele.heading}</Heading>
                <Text>{ele.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
        <Box mt={"50px"}>
          <Image
            borderRadius={"lg"}
            src="https://assets.wfcdn.com/im/66611904/resize-h454-w2000%5Ecompr-r85/2653/265313772/financing_available._find_the_payment_option_that%27s_right_for_you._learn_more.__265313772.jpg"
          />
        </Box>
      </Box>

      <Box mt={"50px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          What we're doing to make an impact
        </Text>

        <SimpleGrid
          spacing={4}
          templateColumns={["1fr", "2fr", "repeat(3, 1fr)"]}
          mt={"20px"}
        >
          {cards2.map((ele, i) => (
            <Card
              key={i}
              _hover={{
                borderColor: "black",
                borderWidth: "1px",
                boxShadow: "xl",
                cursor: 'pointer'
              }}
              shadow={"none"}
            >
              <CardHeader>
                <Image src={ele.url} borderRadius={"lg"} />
              </CardHeader>
              <CardBody>
                <Heading fontSize={"1.4rem"}>{ele.heading}</Heading>
                <Text mt={"10px"}>{ele.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box mt={"50px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
        Shop by department
        </Text>

        <SimpleGrid
          spacing={4}
          templateColumns={["1fr", "2fr", "repeat(7, 1fr)"]}
          mt={"20px"}
        >
          {cards3.map((ele, i) => (
            <Card
              key={i}
              _hover={{
                borderColor: "black",
                borderWidth: "1px",
                boxShadow: "xl",
                cursor: 'pointer'
              }}
              shadow={"none"}
            >
              <CardHeader>
                <Image src={ele.url} borderRadius={"lg"} boxSize="130px" objectFit="cover"/>
              </CardHeader>
              <CardBody>
                <Text >{ele.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Flex mt={'30px'}>
        <Box w={'30%'} display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image src="https://assets.wfcdn.com/im/17031803/resize-h128-w128%5Ecompr-r85/1711/171106361/default_name.jpg" w={'20%'}/>
            <Heading fontSize={'lg'}>Unbeatable Selection</Heading>

        </Box>
        <Box w={'30%'} display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image src="https://assets.wfcdn.com/im/51084542/resize-h128-w128%5Ecompr-r85/1711/171106364/default_name.jpg" w={'20%'}/>
            <Heading fontSize={'lg'}>Expert Customer Service</Heading>

        </Box>
        <Box w={'30%'} display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image src="https://assets.wfcdn.com/im/87128189/resize-h128-w128%5Ecompr-r85/1711/171106369/default_name.jpg" w={'20%'}/>
            <Heading fontSize={'lg'}>Fast & Free Shipping Over $35*</Heading>

        </Box>
        <Box w={'30%'} display={'flex'} flexDir={'column'} alignItems={'center'}>
            <Image src="https://assets.wfcdn.com/im/21024486/resize-h128-w128%5Ecompr-r85/1711/171106371/default_name.jpg" w={'20%'}/>
            <Heading fontSize={'lg'}>Amazing Value Every Day</Heading>

        </Box>
      </Flex>
    </Box>
  );
};

export default Section7;
