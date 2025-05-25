import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      paddingLeft={8}
      paddingRight={8}
      paddingTop={8}
      maxW="1600px"
      mx="auto"
    >
      <Link to={"/"}>
        <Image src={logo} boxSize="65px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
