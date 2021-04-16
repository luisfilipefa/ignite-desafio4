import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import Description from "./Description";
import SummaryContainer from "./SummaryContainer";

export interface SummaryProps {
  description: string;
  total_countries: string | number;
  total_languages: string | number;
  top_hundred_cities: string | number;
}

export default function Summary({
  description,
  total_countries,
  total_languages,
  top_hundred_cities,
}: SummaryProps) {
  return (
    <Flex direction={{ sm: "column" }}>
      <Description description={description} />
      <SummaryContainer
        total_countries={total_countries}
        total_languages={total_languages}
        top_hundred_cities={top_hundred_cities}
      />
    </Flex>
  );
}
