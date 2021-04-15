import {
  Box,
  Circle,
  Flex,
  FlexProps,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import React from "react";

interface TypeCardProps extends FlexProps {
  title: string;
  image?: string;
  alt?: string;
}

export default function TypeCard({
  title,
  image,
  alt,
  ...rest
}: TypeCardProps) {
  const showIcons = useBreakpointValue({ sm: false, md: true });

  return (
    <Flex
      direction={{ sm: "row", md: "column" }}
      align="center"
      boxShadow={{ md: "xl" }}
      borderRadius={{ md: "base" }}
      py={{ lg: "4" }}
      {...rest}
    >
      {showIcons ? (
        <Box w={{ md: "60px", lg: "100px" }} mb={{ md: "2", lg: "4" }}>
          <Image src={image} alt={alt} />
        </Box>
      ) : (
        <Circle size="8px" bg="highlight" mr="2" />
      )}
      <Text
        color="cyan"
        fontSize={{ sm: "md", md: "lg", lg: "24" }}
        fontWeight="medium"
      >
        {title}
      </Text>
    </Flex>
  );
}
