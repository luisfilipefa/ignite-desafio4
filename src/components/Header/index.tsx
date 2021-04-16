import { Flex } from "@chakra-ui/layout";
import Logo from "./Logo";
import React from "react";

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="center"
      h={{ sm: "8vh", lg: "16vh" }}
    >
      <Logo />
    </Flex>
  );
}
