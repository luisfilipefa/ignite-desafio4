import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { SummaryProps } from ".";
import Description from "./Description";
import SummaryItem from "./SummaryItem";

type SummaryContainerProps = Omit<SummaryProps, "description">;

export default function SummaryContainer({
  total_countries,
  total_languages,
  top_hundred_cities,
}: SummaryContainerProps) {
  return (
    <Flex
      h={{ sm: "10vh" }}
      align="center"
      justifyContent={{ sm: "space-between", md: "space-around" }}
      mb={{ sm: "5", md: "10" }}
    >
      <SummaryItem label="países" value={total_countries} />
      <SummaryItem label="línguas" value={total_languages} />
      <SummaryItem label="cidades 100+" value={top_hundred_cities} />
    </Flex>
  );
}
