import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actionTypes";

const Header = () => {
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const Logout = () => {
    return (
      <Text
        onClick={handleLogout}
        _hover={{
          textDecoration: "underline solid rgb(0,96,169)",
          cursor: "pointer",
        }}
      >
        Logout
      </Text>
    );
  };

  function handleLogout() {
    localStorage.removeItem("credentials");
    dispatch({ type: logout });
    window.location.reload();
  }

  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        bgColor={"#7b189f"}
        p={4}
        paddingTop={0}
        color={"white"}
        paddingLeft={"70px"}
        paddingRight={"70px"}
        padding={"0.3rem"}
        fontSize={"15px"}
      >
        <Box minWidth={"max-content"}>
          <Text
            _hover={{ textDecoration: "underline solid white" }}
            cursor={"pointer"}
          >
            Up to 50% OFF & Fast Shipping | Shop The BIG Outdoor Sale
            <ArrowForwardIcon boxSize={5} />
          </Text>
        </Box>
        <Box display={"flex"} gap={2} minWidth={"max-content"}>
          <Text
            _hover={{ textDecoration: "underline solid white" }}
            cursor={"pointer"}
          >
            App
          </Text>
          <Divider orientation="vertical" />
          <Text
            _hover={{ textDecoration: "underline solid white" }}
            cursor={"pointer"}
          >
            Financing
          </Text>
          <Divider orientation="vertical" />
          <Text
            _hover={{ textDecoration: "underline solid white" }}
            cursor={"pointer"}
          >
            Professional
          </Text>
          <Divider orientation="vertical" />
          <Text
            _hover={{ textDecoration: "underline solid white" }}
            cursor={"pointer"}
          >
            Free Shipping Over $35*
          </Text>
        </Box>
      </Flex>

      <Flex
        border={"1px solid #D3D3D3"}
        shadow={"sm"}
        alignItems={"center"}
        paddingLeft={"50px"}
        paddingRight={"70px"}
      >
        <Box w={"400px"}>
          <Link to={"/"}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/72/Wayfair-logo-2024.png?20240425193018"
              width={"180px"}
              cursor={"pointer"}
            />
          </Link>
        </Box>

        <InputGroup marginLeft={"80px"}>
          <InputLeftElement pointerEvents="none" mt={1} ml={2}>
            <Search2Icon />
          </InputLeftElement>
          <Input
            pl="3.5rem"
            placeholder="Find anything home..."
            border={"1px solid"}
            height={"50px"}
            _hover={'none'}
          />
        </InputGroup>
        <Flex gap={4} marginLeft={"100px"} width={"300px"}>
          <Flex
            gap={2}
            alignItems={"center"}
            _hover={{ color: "purple" }}
            cursor={"pointer"}
            minWidth={"max-content"}
          >
            {state.isAuth ? (
              <Logout />
            ) : (
              <Link
                to={"/signup"}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Icon as={RxAvatar} boxSize={"32px"} />
                <Text>Sign In</Text>
              </Link>
            )}
          </Flex>
          <Flex
            gap={2}
            alignItems={"center"}
            _hover={{ color: "purple" }}
            cursor={"pointer"}
          >
            <Link
              to={"/cart"}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Icon as={IoCartOutline} boxSize={"32px"} />
              <Text>Cart</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        gap={6}
        border={"1px solid #D3D3D3"}
        p={2}
        minWidth={"max-content"}
        display={["none", "none", "flex"]}
      >
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Furniture
          </MenuButton>
          <MenuList>
            <Link to={"/sofa"}>
              <MenuItem>Living Room</MenuItem>
            </Link>
            <MenuItem>Bedroom</MenuItem>
            <MenuItem>Dining Room</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Outdoor
          </MenuButton>
          <MenuList>
            <MenuItem>Patio Furniture</MenuItem>
            <MenuItem>Garden Decor</MenuItem>
            <MenuItem>Outdoor Lighting</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Bedding & Bath
          </MenuButton>
          <MenuList>
            <MenuItem>Bedding Sets</MenuItem>
            <MenuItem>Bath Towels</MenuItem>
            <MenuItem>Shower Curtains</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Rugs
          </MenuButton>
          <MenuList>
            <MenuItem>Area Rugs</MenuItem>
            <MenuItem>Outdoor Rugs</MenuItem>
            <MenuItem>Rug Pads</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Décor & Pillows
          </MenuButton>
          <MenuList>
            <MenuItem>Wall Art</MenuItem>
            <MenuItem>Throw Pillows</MenuItem>
            <MenuItem>Mirrors</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Lighting
          </MenuButton>
          <MenuList>
            <MenuItem>Ceiling Lights</MenuItem>
            <MenuItem>Table Lamps</MenuItem>
            <MenuItem>Floor Lamps</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Organization
          </MenuButton>
          <MenuList>
            <MenuItem>Storage Solutions</MenuItem>
            <MenuItem>Closet Organizers</MenuItem>
            <MenuItem>Office Storage</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Kitchen
          </MenuButton>
          <MenuList>
            <MenuItem>Cookware</MenuItem>
            <MenuItem>Kitchen Storage</MenuItem>
            <MenuItem>Small Appliances</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Baby & Kids
          </MenuButton>
          <MenuList>
            <MenuItem>Baby Furniture</MenuItem>
            <MenuItem>Kids Bedding</MenuItem>
            <MenuItem>Nursery Decor</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Home Improvement
          </MenuButton>
          <MenuList>
            <MenuItem>Hardware</MenuItem>
            <MenuItem>Plumbing</MenuItem>
            <MenuItem>Electrical</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Appliances
          </MenuButton>
          <MenuList>
            <MenuItem>Refrigerators</MenuItem>
            <MenuItem>Washers & Dryers</MenuItem>
            <MenuItem>Dishwashers</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Pet
          </MenuButton>
          <MenuList>
            <MenuItem>Pet Beds</MenuItem>
            <MenuItem>Pet Feeders</MenuItem>
            <MenuItem>Pet Toys</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Holiday
          </MenuButton>
          <MenuList>
            <MenuItem>Christmas Decor</MenuItem>
            <MenuItem>Halloween Decor</MenuItem>
            <MenuItem>Holiday Lighting</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            _hover={{
              color: "purple",
              textDecoration: "underline solid purple",
            }}
            color={"black"}
            cursor={"pointer"}
            as={Button}
            variant="link"
            fontWeight={"normal"}
            fontSize={"sm"}
          >
            Shop by Room
          </MenuButton>
          <MenuList>
            <MenuItem>Living Room</MenuItem>
            <MenuItem>Bedroom</MenuItem>
            <MenuItem>Dining Room</MenuItem>
          </MenuList>
        </Menu>
        <Text
          _hover={{ textDecoration: "underline solid purple" }}
          cursor={"pointer"}
          color={"#8B0000"}
        >
          Sale
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
