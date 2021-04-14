import { Box, Text } from "@chakra-ui/react";

import React from "react";

export default function Banner() {
  return (
    <Box
      py={{ sm: "5" }}
      px={{ sm: "3" }}
      bgImage="url(/banner.png)"
      bgSize="cover"
    >
      <Text fontSize="lg" color="gray.50">
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text fontSize="sm" color="gray.100">
        Chegou a hora de tirar do papel a viagem que
        <br />
        você sempre sonhou.
      </Text>
    </Box>
  );
}
