import { Flex } from "@chakra-ui/layout";
import Logo from "./Logo";
import React from "react";
import BackButton from "./BackButton";

export default function Header() {
  return (
    <Flex
      as="header"
      position="relative"
      align="center"
      justifyContent="center"
      h={{ sm: "8vh", lg: "12vh" }}
    >
      <BackButton />
      <Logo />
    </Flex>
  );
}
