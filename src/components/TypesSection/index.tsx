import { Circle, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import React from "react";
import TypeCard from "./TypeCard";

export default function TypesSection() {
  return (
    <Grid
      templateRows={{ sm: "repeat(3, 1fr)", md: "1fr" }}
      templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
      gap={{ sm: 4, md: 2 }}
      py={{ sm: "10" }}
      px={{ sm: "5" }}
    >
      <GridItem>
        <TypeCard title="vida noturna" image="/cocktail.svg" alt="cocktail" />
      </GridItem>
      <GridItem>
        <TypeCard
          title="praia"
          image="/surf.svg"
          alt="surf"
          justifyContent={{ sm: "flex-end" }}
        />
      </GridItem>
      <GridItem>
        <TypeCard title="moderno" image="/building.svg" alt="modern" />
      </GridItem>
      <GridItem>
        <TypeCard
          title="clássico"
          image="/museum.svg"
          alt="museum"
          justifyContent={{ sm: "flex-end" }}
        />
      </GridItem>
      <GridItem colSpan={{ sm: 2, md: 1 }}>
        <TypeCard
          title="e mais..."
          image="/earth.svg"
          alt="earth"
          justifyContent={{ sm: "center" }}
        />
      </GridItem>
    </Grid>
  );
}
