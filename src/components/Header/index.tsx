import { Flex } from "@chakra-ui/layout";
import Logo from "./Logo";
import React from "react";

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="center"
      py={{ sm: "5", lg: "6" }}
    >
      <Logo />
    </Flex>
  );
}
