import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Authentication } from "../redux/actionTypes";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      // Send the login request to the backend
      const response = await axios.post("http://localhost:5000/login", { email, password });

      // If login is successful
      if (response.status === 200) {
        // Store the JWT token or user data in localStorage
        localStorage.setItem("credentials", JSON.stringify(response.data));
        
        // Dispatch the authentication action to update the state
        dispatch({ type: Authentication });

        toast({
          title: "Login Successful",
          description: "Welcome back!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle errors (wrong credentials, server issues, etc.)
      toast({
        title: "Login Failed",
        description: error.response ? error.response.data.message : "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  if (state.isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"} mx={"180px"} mt={"50px"}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/Wayfair-logo-2024.png?20240425193018"
          width={"180px"}
          cursor={"pointer"}
        />
        <Text>Secure Login</Text>
      </Flex>

      <Box mx={"180px"} mt={"10px"}>
        <Divider border={"0.5px solid"} />
      </Box>

      <SimpleGrid justifyContent={"center"} alignItems={"center"} w={["90%", "70%", "50%", "30%"]} m={"auto"}>
        <SimpleGrid>
          <Text fontSize={"36px"} mt={5} mb={5}>Sign In</Text>
          <Box p={7} border={"1px solid rgba(0,0,0,0.2)"}>
            <FormControl onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="Email Address"
                border={"1px solid"}
                mb={3}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                border={"1px solid"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Text
                color={"rgb(0,96,169)"}
                fontSize={"12px"}
                _hover={{ textDecoration: "underline" }}
                fontWeight={400}
                cursor={"pointer"}
                m={2}
              >
                Forgot Password?
              </Text>
              <Flex mt={5} mb={4} gap={"10px"}>
                <input type="checkbox" />
                <Text fontWeight={400} fontSize={"14px"}>Keep me signed in</Text>
              </Flex>

              <Button
                w={"100%"}
                mt={4}
                mb={3}
                fontWeight={400}
                bg={"#7b189f"}
                color={"#FFFFFF"}
                _hover={"none"}
                borderRadius={"full"}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </FormControl>

            <Divider bg={"rgba(0,0,0,0.5)"} mt={2} mb={3}></Divider>
            <Text fontWeight={400} fontSize={"18px"} mb={4}>New to Wayfair?</Text>
            <Link to={"/signup"}>
              <Button
                color={"#FFF"}
                bg={"#7b189f"}
                w={"100%"}
                borderRadius={"full"}
                _hover={"none"}
              >
                Create Account
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      <Flex gap={3} fontSize={"14px"} mt={50} p={"20px"} fontWeight={400} justifyContent={"space-around"} alignItems={"center"} bg={"#EEEEEE"}>
        <Text fontWeight={400} fontSize={"14px"}>© 2024, Wayfair</Text>
        <Text _hover={{ textDecoration: "underline" }}>Your Privacy Rights and Choices</Text>
        <Text _hover={{ textDecoration: "underline" }}>Privacy & Terms</Text>
      </Flex>
    </Box>
  );
};

export default LoginPage;