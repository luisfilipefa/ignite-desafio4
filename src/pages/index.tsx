import { Box, Circle, Grid, GridItem, Text } from "@chakra-ui/layout";

import Banner from "../components/Banner";
import { Flex } from "@chakra-ui/layout";
import Head from "next/head";
import { Image } from "@chakra-ui/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>World Tripe | Home</title>
      </Head>
      <Banner />
      <Grid
        templateRows={{ sm: "repeat(3, 1fr)" }}
        templateColumns={{ sm: "repeat(2, 1fr)" }}
        gap={{ sm: 4 }}
      >
        <GridItem align="center">
          <Flex align="center" justifyContent="center">
            <Circle size="8px" bg="highlight" mr="2" />
            <Text>vida noturna</Text>
          </Flex>
          teste
        </GridItem>
        <GridItem colSpan={{ sm: 2 }} align="center">
          teste
        </GridItem>
      </Grid>
    </div>
  );
}
