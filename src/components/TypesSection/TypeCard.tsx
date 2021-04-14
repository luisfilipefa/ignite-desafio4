import { Circle, Flex, Text } from "@chakra-ui/react";

import React from "react";

interface TypeCardProps {
  title: string;
}

export default function TypeCard({ title }: TypeCardProps) {
  return (
    <Flex align="center" justifyContent="center">
      <Circle size="8px" bg="highlight" mr="2" />
      <Text color="cyan" fontSize="md" fontWeight="medium">
        {title}
      </Text>
    </Flex>
  );
}
