import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface SummaryItemProps {
  label: string;
  value: string | number;
}

export default function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <Flex direction="column" align="center">
      <Text
        fontSize={{ sm: "lg", md: "xl" }}
        color="highlight"
        fontWeight="medium"
      >
        {value}
      </Text>
      <Text color="cyan" fontSize={{ sm: "md", md: "lg" }}>
        {label}
      </Text>
    </Flex>
  );
}
