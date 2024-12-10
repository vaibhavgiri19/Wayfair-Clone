import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatNumber,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sofaData } from "../../json/sofaData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StarIcon } from "@chakra-ui/icons";

const SofaSinglePage = () => {
  const { id } = useParams();

  const toast = useToast();

  const selectedItem = sofaData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Product not found!</div>;
  }

  const { image, price, description, oldPrice, rating, reviewCount } =
    selectedItem;

  function handleCart() {
    let arr = JSON.parse(localStorage.getItem("cart")) || [];
    arr.push(selectedItem);
    localStorage.setItem("cart", JSON.stringify(arr));
    let cartObj = {
      title: "Product Added Successfully",
      description: `${description} Added to your cart`,
      status: "success",
      duration: 9000,
      isClosable: true,
    };
    toast(cartObj);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Header />

      <Box mx={10} mb={25}>
        <Breadcrumb mt={5}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Furniture</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Living Room</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Sofas</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={20}
          p={[5, 5, 10, 10]}
          w={"90%"}
          m={"auto"}
        >
          <SimpleGrid justifyContent={"center"}>
            <img src={image} alt="Image" />
          </SimpleGrid>
          <SimpleGrid>
            <Heading fontSize={"20px"} mb={20}>
              {description}
              <Box display="flex" mt="8" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < rating ? "black.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  ({reviewCount})
                </Box>
              </Box>
            </Heading>
            <Flex justifyContent={"space-between"} mb={5}>
              <Text fontWeight={400} fontSize={"20px"}>
                Your Price
              </Text>

              <Flex direction="row" align="baseline">
                <Stat>
                  <StatNumber>${price}</StatNumber>
                </Stat>
                <Stat ml="2">
                  <StatNumber
                    color={"gray"}
                    fontSize={"0.9rem"}
                    textDecoration={"line-through"}
                  >
                    ${oldPrice}
                  </StatNumber>
                </Stat>
              </Flex>
            </Flex>
            <Button
              bg={"#7b189f"}
              color={"white"}
              _hover={{ color: "white", bg: "#5a0d7f" }}
              borderRadius={"full"}
              onClick={handleCart}
            >
              Add to Cart
            </Button>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default SofaSinglePage;
