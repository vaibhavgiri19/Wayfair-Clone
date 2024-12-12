import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
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

  const handleLogout = () => {
    localStorage.removeItem("credentials");
    dispatch({ type: logout });
    window.location.reload();
  };

  // Menu Data with Categories and Subcategories
  const menuData = [
    {
      name: "Furniture",
      categories: [
        {
          name: "Living Room Furniture",
          subcategories: ["Sofas", "Sectionals", "Coffee Tables", "TV Stands"],
        },
        {
          name: "Bedroom Furniture",
          subcategories: ["Beds", "Nightstands", "Dressers", "Wardrobes"],
        },
      ],
    },
    {
      name: "Outdoor",
      categories: [
        {
          name: "Patio Furniture",
          subcategories: ["Dining Sets", "Lounge Chairs", "Outdoor Sofas"],
        },
        {
          name: "Garden Decor",
          subcategories: ["Planters", "Fountains", "Outdoor Lighting"],
        },
      ],
    },
    {
      name: "Bedding & Bath",
      categories: [
        {
          name: "Bedding",
          subcategories: ["Comforters", "Duvet Covers", "Sheet Sets"],
        },
        {
          name: "Bath",
          subcategories: ["Towels", "Shower Curtains", "Bath Mats"],
        },
      ],
    },
    {
      name: "Rugs",
      categories: [
        {
          name: "Area Rugs",
          subcategories: ["Wool Rugs", "Cotton Rugs", "Outdoor Rugs"],
        },
        {
          name: "Rug Pads",
          subcategories: ["Non-Slip Pads", "Cushioned Pads"],
        },
      ],
    },
    {
      name: "Décor & Pillows",
      categories: [
        {
          name: "Wall Art",
          subcategories: ["Canvas Art", "Posters", "Wall Mirrors"],
        },
        {
          name: "Throw Pillows",
          subcategories: ["Floor Pillows", "Decorative Pillows"],
        },
      ],
    },
    {
      name: "Lighting",
      categories: [
        {
          name: "Ceiling Lights",
          subcategories: ["Chandeliers", "Pendant Lights", "Flush Mounts"],
        },
        {
          name: "Table Lamps",
          subcategories: ["Desk Lamps", "Reading Lamps"],
        },
      ],
    },
    {
      name: "Organization",
      categories: [
        {
          name: "Closet Organizers",
          subcategories: ["Hangers", "Storage Bins", "Shelf Dividers"],
        },
        {
          name: "Office Storage",
          subcategories: ["Filing Cabinets", "Storage Drawers"],
        },
      ],
    },
    {
      name: "Kitchen",
      categories: [
        {
          name: "Cookware",
          subcategories: ["Pots", "Pans", "Bakeware"],
        },
        {
          name: "Kitchen Storage",
          subcategories: ["Pantry Storage", "Cabinet Organizers"],
        },
      ],
    },
    {
      name: "Baby & Kids",
      categories: [
        {
          name: "Furniture",
          subcategories: ["Cribs", "Kids Beds", "Changing Tables"],
        },
        {
          name: "Toys",
          subcategories: ["Stuffed Animals", "Educational Toys"],
        },
      ],
    },
    {
      name: "Home Improvement",
      categories: [
        {
          name: "Hardware",
          subcategories: ["Doorknobs", "Locks", "Hinges"],
        },
        {
          name: "Plumbing",
          subcategories: ["Faucets", "Shower Heads"],
        },
      ],
    },
    {
      name: "Appliances",
      categories: [
        {
          name: "Kitchen Appliances",
          subcategories: ["Refrigerators", "Microwaves", "Dishwashers"],
        },
        {
          name: "Laundry",
          subcategories: ["Washers", "Dryers"],
        },
      ],
    },
    {
      name: "Pet",
      categories: [
        {
          name: "Pet Beds",
          subcategories: ["Dog Beds", "Cat Beds"],
        },
        {
          name: "Pet Toys",
          subcategories: ["Chew Toys", "Interactive Toys"],
        },
      ],
    },
    {
      name: "Holiday",
      categories: [
        {
          name: "Decor",
          subcategories: ["Christmas Lights", "Ornaments"],
        },
        {
          name: "Outdoor Holiday Decor",
          subcategories: ["Inflatables", "Wreaths"],
        },
      ],
    },
    {
      name: "Shop by Room",
      categories: [
        {
          name: "Living Room",
          subcategories: ["Sofas", "Coffee Tables"],
        },
        {
          name: "Bedroom",
          subcategories: ["Beds", "Nightstands"],
        },
      ],
    },
    {
      name: "Sale",
      categories: [
        {
          name: "Furniture Sale",
          subcategories: ["Living Room", "Bedroom Furniture"],
        },
        {
          name: "Appliances Sale",
          subcategories: ["Kitchen Appliances", "Laundry"],
        },
      ],
    },
  ];

  return (
    <Box>
      {/* Topbar */}
      <Flex
        justifyContent="space-between"
        bgColor="#7b189f"
        color="white"
        px="70px"
        py="10px"
        fontSize="16px"
        alignItems="center"
      >
        <Text
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
          fontWeight="500"
        >
          Up to 50% OFF & Fast Shipping | Shop The BIG Outdoor Sale
          <ArrowForwardIcon boxSize={5} ml={2} />
        </Text>
        <Flex gap={4} alignItems="center">
          {["App", "Financing", "Professional", "Free Shipping Over $35*"].map(
            (item, index) => (
              <React.Fragment key={index}>
                <Text
                  _hover={{ textDecoration: "underline" }}
                  cursor="pointer"
                >
                  {item}
                </Text>
                {index < 3 && (
                  <Divider orientation="vertical" height="20px" borderColor="white" />
                )}
              </React.Fragment>
            )
          )}
        </Flex>
      </Flex>

      {/* Main Header */}
      <Flex
        borderBottom="1px solid #D3D3D3"
        alignItems="center"
        justifyContent="space-between"
        px="70px"
        py="15px"
      >
        {/* Logo */}
        <Box>
          <Link to="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Wayfair_logo_with_tagline.png"
              width="180px"
              cursor="pointer"
            />
          </Link>
        </Box>

        {/* Search Bar */}
        <InputGroup
          maxW="600px"
          flex="1"
          mx="40px"
          height="50px"
          boxShadow="0 2px 5px rgba(0,0,0,0.1)"
        >
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Find anything home..."
            border="1px solid #ccc"
            borderRadius="full"
            fontSize="16px"
            height="50px"
            _focus={{ borderColor: "purple.500", boxShadow: "0 0 5px purple" }}
          />
        </InputGroup>

        {/* User Actions */}
        <Flex gap={6} alignItems="center">
          {state.isAuth ? (
            <Text
              onClick={handleLogout}
              cursor="pointer"
              _hover={{ textDecoration: "underline", color: "purple.500" }}
              fontWeight="500"
            >
              Logout
            </Text>
          ) : (
            <Link
              to="/signup"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <RxAvatar size="32px" />
              <Text fontSize="16px">Sign In</Text>
            </Link>
          )}
          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <IoCartOutline size="32px" />
            <Text fontSize="16px">Cart</Text>
          </Link>
        </Flex>
      </Flex>

      {/* Navigation Menu */}
      <Flex
        justifyContent="center"
        gap={6}
        borderBottom="1px solid #D3D3D3"
        py="10px"
        display={["none", "none", "flex"]}
      >
        {menuData.map((menu, index) => (
          <Menu key={index}>
            <MenuButton
              _hover={{
                color: "purple.500",
                textDecoration: "underline",
              }}
              color="black"
              fontSize="15px"
              fontWeight="500"
              cursor="pointer"
              as={Button}
              variant="link"
            >
              {menu.name}
            </MenuButton>
            <MenuList>
              {menu.categories.map((category, catIdx) => (
                <MenuGroup title={category.name} key={catIdx}>
                  {category.subcategories.map((subcategory, subIdx) => (
                    <MenuItem key={subIdx}>
                      <Link to={`/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}>
                        {subcategory}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuGroup>
              ))}
            </MenuList>
          </Menu>
        ))}
      </Flex>
    </Box>
  );
};

export default Header;
