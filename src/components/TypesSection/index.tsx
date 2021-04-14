import { Circle, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import React from "react";
import TypeCard from "./TypeCard";

export default function TypesSection() {
  return (
    <Grid
      templateRows={{ sm: "repeat(3, 1fr)" }}
      templateColumns={{ sm: "repeat(2, 1fr)" }}
      gap={{ sm: 4 }}
      py={{ sm: "10" }}
    >
      <GridItem align="center">
        <TypeCard title="vida noturna" />
      </GridItem>
      <GridItem align="center">
        <TypeCard title="praia" />
      </GridItem>
      <GridItem align="center">
        <TypeCard title="moderno" />
      </GridItem>
      <GridItem align="center">
        <TypeCard title="clássico" />
      </GridItem>
      <GridItem colSpan={{ sm: 2 }} align="center">
        <TypeCard title="e mais..." />
      </GridItem>
    </Grid>
  );
}
