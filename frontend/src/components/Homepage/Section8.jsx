import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Section8 = () => {
  return (
    <Box mt={"100px"}>
      <Divider mb={"10px"} />
      <Image src="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg" />

      <Flex
        width={"80%"}
        alignItems={"center"}
        m={"0 auto"}
        gap={"10%"}
        mt={"50px"}
        justifyContent={"center"}
      >
        <Text>Be the first to know about our best deals!</Text>
        <InputGroup width={"30%"}>
          <Input type="tel" placeholder="Email address" border={"1px solid"} />
          <InputRightElement width={"80px"}>
            <Button color={"white"} bgColor={"#7b189f"}>
              Submit
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Divider mt={"40px"} />
    </Box>
  );
};

export default Section8;
