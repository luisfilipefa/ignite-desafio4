import { Box, Text } from "@chakra-ui/react";

import React from "react";

export default function CTA() {
  return (
    <Box py={{ sm: "10" }}>
      <Text
        align="center"
        color="cyan"
        fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
        fontWeight="medium"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
    </Box>
  );
}
