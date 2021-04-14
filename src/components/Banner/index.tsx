import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import React from "react";

export default function Banner() {
  const showPlane = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <Box
      py={{ sm: "5", md: "10" }}
      px={{ sm: "3", md: "70px" }}
      bgImage="url(/banner.png)"
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Text
        fontSize={{ sm: "lg", md: "xl" }}
        color="gray.50"
        fontWeight="medium"
      >
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text fontSize={{ sm: "sm", md: "md" }} color="gray.100">
        Chegou a hora de tirar do papel a viagem que
        <br />
        você sempre sonhou.
      </Text>
      {showPlane && (
        <Box
          w={{ md: "200px" }}
          position="absolute"
          top={{ md: "90" }}
          right={{ md: "18" }}
        >
          <Image src="/airplane.svg" />
        </Box>
      )}
    </Box>
  );
}
