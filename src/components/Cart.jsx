import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatNumber,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const toast = useToast();

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const calculateTotal = () => {
    if (cartItems.length === 0) return 0;
    return cartItems
      .reduce((total, item) => Number(total) + Number(item.price), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    toast({
      title: "Checkout Completed Successfully",
      description: "Cart is now empty!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    toast({
      title: "Item Removed From Cart",
      description: "Item successfully removed.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Header />
      <Box p={[5, 5, 10, 20]} pt={[5, 5, 5, 5]}>
        <Heading fontWeight={400}>My Cart</Heading>
        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "2fr 1fr",
            "2fr 1fr",
          ]}
          alignItems={"start"}
        >
          <SimpleGrid gap={2}>
            {cartItems.length > 0 ? (
              cartItems.map((elem) => (
                <Box key={elem.id} p={5}>
                  <Divider mb={10} bg={"grey"} h={0.8} />
                  <SimpleGrid
                    gridTemplateColumns={[
                      "repeat(1,1fr)",
                      "repeat(1,1fr)",
                      "repeat(1,1fr)",
                      "repeat(2,1fr)",
                    ]}
                    gap={5}
                  >
                    <SimpleGrid
                      gridTemplateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                        "repeat(2,1fr)",
                      ]}
                    >
                      <Box w={40}>
                        <img src={elem.image} alt={elem.title} />
                      </Box>
                    </SimpleGrid>
                    <Box w={600}>
                      <Text>{elem.description}</Text>
                      <Flex direction="row" align="baseline">
                        <Stat>
                          <StatNumber>${elem.price}</StatNumber>
                        </Stat>
                        <Stat ml="2">
                          <StatNumber
                            color={"gray"}
                            fontSize={"0.9rem"}
                            textDecoration={"line-through"}
                          >
                            ${elem.oldPrice}
                          </StatNumber>
                        </Stat>
                      </Flex>
                      <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={i < elem.rating ? "black.500" : "gray.300"}
                            />
                          ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          ({elem.reviewCount})
                        </Box>
                      </Box>
                      <Text
                        mt={8}
                        color={"purple"}
                        textDecoration={"underline"}
                        _hover={{ textDecoration: "underline" }}
                        fontWeight={400}
                        cursor={"pointer"}
                        onClick={() => handleRemove(elem.id)}
                      >
                        Remove
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              ))
            ) : (
              <Box mt={5}>
                <Divider mb={10} bg={"grey"} h={0.8} />
                <Text fontSize={"18px"} fontWeight={400} mb={3}>
                  Your shopping cart is empty. Please add at least one item to
                  your cart before checking out.
                </Text>
                <Link to="/">
                  <Button
                    mb={4}
                    _hover={{ color: "white" }}
                    bg={"purple"}
                    borderRadius={"full"}
                    color={"white"}
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Divider mb={10} bg={"grey"} h={0.8} />
              </Box>
            )}
          </SimpleGrid>

          <Box p={4} fontWeight={400} shadow={"2xl"} mt={10} mb={100}>
            <Flex mb={4} justifyContent={"space-between"}>
              <Text>Item Subtotal</Text>
              <Text>${calculateTotal()}</Text>
            </Flex>
            <Flex mb={3} fontSize={"14px"} justifyContent={"space-between"}>
              <Text>Shipping & Handling for 98101</Text>
              <Text>$0.00</Text>
            </Flex>
            <Divider mb={3} bg={"grey"} />
            <Flex mb={4} justifyContent={"space-between"} fontSize={"18px"}>
              <Text>Total</Text>
              <Text>${calculateTotal()}</Text>
            </Flex>
            <Text mb={2} fontSize={"14px"} color={"rgb(112,112,112)"}>
              Applicable taxes will be calculated at checkout.
            </Text>
            <Button
              color={"white"}
              _hover={{ color: "white" }}
              w={"100%"}
              fontWeight={400}
              bg={"purple"}
              borderRadius={"full"}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;
