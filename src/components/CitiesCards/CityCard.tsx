import { Stack, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { City } from "../../api/api";
import { getImageUrl } from "../../utils/getImageUrl";

interface CityProps {
  city: City;
}

export default function CityCard({ city }: CityProps) {
  return (
    <Stack
      direction="column"
      spacing={{ sm: "4" }}
      w={{ sm: "257px" }}
      h={{ sm: "259px" }}
      borderRadius="lg"
      border="1px"
      borderColor="highlight"
    >
      <Box
        bgImage={`url(${getImageUrl(city.banner.url)})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        h={{ sm: "60%" }}
        w={{ sm: "100%" }}
        borderTopRadius="lg"
      />
      <Flex px={{ sm: "3" }} align="center" justifyContent="space-between">
        <Stack>
          <Text color="cyan" fontSize={{ sm: "md" }} fontWeight="medium">
            {city.name}
          </Text>
          <Text color="gray.200" fontSize={{ sm: "sm" }}>
            {city.country}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
