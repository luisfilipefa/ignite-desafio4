import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";

export default function Logo() {
  return (
    <Box w={{ sm: "90px", md: "120px", lg: "150px" }}>
      <Image src="/logo.svg" alt="world trip" />
    </Box>
  );
}
