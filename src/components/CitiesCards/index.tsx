import { Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { City } from "../../api/api";
import CityCard from "./CityCard";

interface CitiesCardProps {
  cities: City[];
}

export default function CitiesCard({ cities }: CitiesCardProps) {
  return (
    <Stack direction={{ sm: "column" }} align="center" mb="4" px="4">
      <Heading
        as="h2"
        alignSelf="flex-start"
        ml={{ md: "10" }}
        mb="5"
        color="cyan"
        fontSize={{ sm: "lg", md: "xl" }}
      >
        Cidades +100
      </Heading>
      <Stack
        direction={{ sm: "column", md: "row" }}
        mx="auto"
        spacing={{ sm: "4" }}
        px={{ md: "5" }}
        flexWrap="wrap"
      >
        {cities.map((city, index) => (
          <CityCard key={index} city={city} />
        ))}
      </Stack>
    </Stack>
  );
}
