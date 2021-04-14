import { Box, Circle, Grid, GridItem, Text } from "@chakra-ui/layout";

import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Divider from "../components/Divider";
import { Flex } from "@chakra-ui/layout";
import Head from "next/head";
import { Image } from "@chakra-ui/image";
import TypesSection from "../components/TypesSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>World Tripe | Home</title>
      </Head>
      <Banner />
      <TypesSection />
      <Divider />
      <CTA />
    </>
  );
}
