import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Select,
  SimpleGrid,
  Stat,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { sofaData } from "../../json/sofaData";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const SofaPage = () => {
  const data = sofaData;
  const [sortedData, setSortedData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "ltoh") {
      const sorted = [...data].sort(
        (a, b) => Number(a.Price) - Number(b.Price)
      );
      setSortedData(sorted);
    } else if (value === "htol") {
      const sorted = [...data].sort(
        (a, b) => Number(b.Price) - Number(a.Price)
      );
      setSortedData(sorted);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <Box>
      <Header />

      <Box mx={"10"} mt={"5"}>
        <Breadcrumb >
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

        <Text fontWeight={400} fontSize={"30px"} mt={"10"}>
          Sofas
        </Text>

        <Flex pb={[2, 2, 2, 2]} direction={"column"} alignItems={"end"}>
          <Text fontSize={"17px"} fontWeight={400} mr={2}>
            Sort By:
          </Text>
          <Select
            variant="outline"
            placeholder="Choose"
            w={"20%"}
            outline={"1px solid black"}
            borderRadius={"lg"}
            cursor={"pointer"}
            onChange={handleChange}
          >
            <option value="ltoh">Price: Low To High</option>
            <option value="htol">Price: High To Low</option>
          </Select>
        </Flex>

        <Box>
          <Button
            borderRadius={"full"}
            bg={"white"}
            border={"1px solid"}
            mr={5}
          >
            + Sale
          </Button>
          <Button borderRadius={"full"} bg={"white"} border={"1px solid"}>
            + Fast Delivery
          </Button>
        </Box>

        <SimpleGrid
          gridTemplateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}
          pt={10}
          gap={12}
          alignItems={"end"}
        >
          {(sortedData.length ? sortedData : data).map((elem) => (
            <Link key={elem.id} to={`/sofa/${elem.id}`}>
              <Box px="8px" cursor={"pointer"}>
                <Box
                  position="relative"
                  height={"240px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${elem.image})`}
                  borderRadius="lg"
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
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SofaPage;
