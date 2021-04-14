import { Flex } from "@chakra-ui/layout";
import Logo from "./Logo";
import React from "react";

export default function Header() {
  return (
    <Flex as="header" align="center" justifyContent="center" p={{ sm: "5" }}>
      <Logo />
    </Flex>
  );
}
