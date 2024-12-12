import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Section6 = () => {
  return (
    <SimpleGrid
      pl={["20px", "40px", "70px"]}
      pr={["20px", "40px", "70px"]}
      pt="40px"
      columns={[1, null, 2]}
      spacing="40px"
      mt="40px"
    >
      <Box
        height={["auto", "auto", "80px"]}
        order={[2, 1]}
        textAlign={["center", "left"]}
      >
        <Text fontWeight="bold" fontSize={["2xl", "3xl"]} mt={["20px", "20%"]}>
          Comforting curves
        </Text>
        <Text mt="10px">Round out your look with retro accents.</Text>
        <Text mt="35px" color="purple" textDecoration="underline">
          A twist on modern style
        </Text>
      </Box>
      <Box width={["100%", "100%", "100%"]} order={[1, 2]}>
        <Image
          src="https://assets.wfcdn.com/im/51915135/resize-h0-w1335%5Ecompr-r85/2832/283296851/comforting_curves_283296851.jpg"
          objectFit="cover"
        />
      </Box>
    </SimpleGrid>
  );
};

export default Section6;
