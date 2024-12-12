import { PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <SimpleGrid columns={[1, 3, 3]} spacing="40px" mx={"5%"} my={"3%"}>
        <Box>
          <Heading mb={"10px"} fontSize={"2xl"}>
            About Us
          </Heading>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            About Wayfair
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Wayfair Professional
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Gift Cards
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Wayfair Credit Card
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Wayfair Financing
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Careers
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Sell on Wayfair
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Investor Relations
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Advertise With Us
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Locations
          </Text>
        </Box>

        <Box>
          <Heading mb={"10px"} fontSize={"2xl"}>
            Customer Service
          </Heading>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            My Orders
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            My Account
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Track My Order
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Wayfair Accessibility Statement
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Return Poilcy
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Help Center
          </Text>
          <Text
            color={"gray.700"}
            mb={"5px"}
            _hover={{ textDecoration: "underline solid purple" }}
            cursor={"pointer"}
          >
            Product Recalls
          </Text>
        </Box>

        <Box>
          <Heading mb={"10px"} fontSize={"2xl"}>
            Contact Us
          </Heading>
          <Button
            fontSize={"md"}
            color={"white"}
            bg={"purple"}
            size={"lg"}
            borderRadius={"full"}
            width={"160px"}
            mb={"10px"}
          >
            <TimeIcon mx={"5px"} />
            Quick Help
          </Button>
          <br />
          <Button
            fontSize={"md"}
            color={"purple"}
            size={"lg"}
            borderRadius={"full"}
            width={"160px"}
            mb={"30px"}
          >
            <PhoneIcon mx={"5px"} />
            Call Us
          </Button>
          <Heading mb={"10px"} fontSize={"xl"}>
            Customer Service
          </Heading>
          <Text color={"gray.700"} mb={"5px"} my={"10px"}>
            Open. Closes at 11:59 PM.
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Mon - Fri: 8:00 AM - 11:59 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Sat: 8:00 AM - 8:00 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Sun: 9:00 AM - 6:00 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"} my={"10px"}>
            All times Eastern
          </Text>
          <Heading mb={"10px"} fontSize={"xl"} mt={"15px"}>
            Shopping Assistance
          </Heading>
          <Text color={"gray.700"} mb={"5px"} my={"10px"}>
            Open. Closes at 11:59 PM.
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Mon - Fri: 8:00 AM - 11:59 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Sat: 8:00 AM - 8:00 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"}>
            Sun: 9:00 AM - 6:00 PM
          </Text>
          <Text color={"gray.700"} mb={"5px"} my={"10px"}>
            All times Eastern
          </Text>
        </Box>
      </SimpleGrid>

      <Divider />

      <Flex gap={"30px"} mt={"20px"} ml={"70px"} wrap="wrap">
        <Image
          src="https://assets.wfcdn.com/im/56298724/resize-h600-w600%5Ecompr-r85/1920/192068014/Joss+%26+Main.jpg"
          width={"150px"}
        />
        <Image
          src="https://assets.wfcdn.com/im/39665588/compr-r85/1857/185786407/allmodern.jpg"
          width={"150px"}
        />
        <Image
          src="https://mallmaverick.imgix.net/web/property_managers/1/properties/729/all/20240201202047/BirchLane_296x132.png"
          width={"150px"}
        />
      </Flex>

      <Box display={"flex"} gap={"25px"} ml={"70px"} mt={"5px"}>
        <Icon as={FaTwitter} color={"purple"} boxSize={6} />
        <Icon as={FaFacebookSquare} color={"purple"} boxSize={6} />
        <Icon as={FaPinterest} color={"purple"} boxSize={6} />
        <Icon as={FaInstagram} color={"purple"} boxSize={6} />
      </Box>

      <Flex gap={"15px"} ml={"70px"} mt={"15px"}>
        <Text
          _hover={{ textDecoration: "underline solid purple" }}
          cursor={"pointer"}
        >
          Terms of Use
        </Text>
        <Text
          _hover={{ textDecoration: "underline solid purple" }}
          cursor={"pointer"}
        >
          Privacy Policy
        </Text>
        <Text
          _hover={{ textDecoration: "underline solid purple" }}
          cursor={"pointer"}
        >
          Your Privacy Rights & Choices
        </Text>
      </Flex>

      <Text color={"black"} fontSize={"xs"} ml={"70px"} mt={"10px"} mb={"40px"}>
        © 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA
        02116
      </Text>
    </Box>
  );
};

export default Footer;
