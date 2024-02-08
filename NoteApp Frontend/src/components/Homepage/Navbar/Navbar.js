import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const nav = useNavigate();
  let login = props.login;
  let setLogin = props.setLogin;

  const handleLogout = () => {
        setLogin(false);
        localStorage.removeItem("Token");
        nav('/login');
  }

  return (
    <>
      <Box
        w="100%"
        h="auto"
        bgGradient="linear(to-r, gray.300, blue.400, pink.200)"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontWeight={"bold"}
            color={"black"}
            fontSize={"x-large"}
            cursor={"pointer"}
            onClick={() => {
              nav("/");
            }}
          >
            Note App
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {login && (
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    nav("/notes");
                  }}
                >
                  All Notes
                </Button>
              )}
              {!login && (
                <Button
                  colorScheme="green"
                  onClick={() => {
                    nav("/login");
                  }}
                >
                  Log In
                </Button>
              )}

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {login && (
                <Menu>
                  <MenuButton
                    as={Button}
                    border={"1px solid green"}
                    padding={2}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
