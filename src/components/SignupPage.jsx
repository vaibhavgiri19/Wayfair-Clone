import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Email, Password } from "../redux/actionTypes";

const SignupPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.email || !state.password || !confirmPassword) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (confirmPassword !== state.password) {
      toast({
        title: "Failed",
        description: "Passwords do not match",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      localStorage.setItem("credentials", JSON.stringify(state));
      navigate("/login");
      toast({
        title: "Account Created",
        description: "Your account has been created successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={"180px"}
        mt={"50px"}
      >
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

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mt={"20px"}
        direction={"column"}
      >
        <Heading fontSize={"xl"} textAlign={"center"}>
          Enter your details to sign in or to create an account
        </Heading>

        <FormControl
          width={"30%"}
          mt={"40px"}
          as="form"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="Email Address"
            border={"1px solid"}
            mb={3}
            onChange={(e) => dispatch({ type: Email, payload: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            border={"1px solid"}
            mb={3}
            onChange={(e) =>
              dispatch({ type: Password, payload: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            border={"1px solid"}
            mb={3}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Text fontWeight={400} fontSize={"12px"} mt={"10px"} mb={3}>
            By creating an account you agree to Wayfair.com terms and conditions
            of use.
          </Text>

          <Button
            w={"100%"}
            mt={4}
            mb={3}
            fontWeight={400}
            bg={"#7b189f"}
            color={"#FFFFFF"}
            borderRadius={"full"}
            _hover={{ bg: "#5a0d7f" }}
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default SignupPage;
