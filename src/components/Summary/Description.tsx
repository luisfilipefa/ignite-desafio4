import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { SummaryProps } from "./index";

type DescriptionProps = Pick<SummaryProps, "description">;

export default function Description({ description }: DescriptionProps) {
  return (
    <Box p={{ sm: "5", md: "10" }}>
      <Text align="center" color="cyan" fontSize={{ sm: "sm", md: "md" }}>
        {description}
      </Text>
    </Box>
  );
}
