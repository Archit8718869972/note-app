import { Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import loginimage from "../assets/login.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  HStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../Redux/users/UserActions";
import UserReducer from "./../Redux/users/UserReducer";

export const LoginPage = ({ setLogin }) => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("pink.100", "cyan.700");

  const { auth, token, loading, error } = useSelector(
    (state) => state.UserReducer
  );

  console.log(auth, token);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const clickhandler = async () => {
    const obj = {
      email: email,
      password: password,
    };
    console.log(obj);
    var response = await axios.post("http://localhost:4000/user/login", obj);
    var result = await response.data;

    if (result.status) {
      localStorage.setItem("Token", result.token);
      setLogin(true);
      nav("/notes");
    }

    console.log(result);
  };

  return (
    <Flex w={"100%"} gap={220}>
      <Image w={"50%"} src={loginimage}></Image>

      <HStack w={"50%"}>
        <Flex h="100vh" alignItems="center" justifyContent="center">
          <Flex
            marginBottom={24}
            flexDirection="column"
            bg={formBackground}
            p={12}
            borderRadius={8}
            boxShadow="lg"
          >
            <Heading mb={6}>Log In</Heading>
            <Input
              value={email}
              placeholder="Enter E-Mail"
              type="email"
              variant="filled"
              mb={3}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <Input
              value={password}
              placeholder="Enter Password"
              type="password"
              variant="filled"
              mb={6}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <Button colorScheme="teal" mb={8} onClick={clickhandler}>
              Log In
            </Button>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="dark_mode" mb="0">
                Enable Dark Mode?
              </FormLabel>
              <Switch
                id="dark_mode"
                colorScheme="teal"
                size="lg"
                onChange={toggleColorMode}
              />
            </FormControl>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};
