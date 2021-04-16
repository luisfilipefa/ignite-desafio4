import { Flex, Heading } from "@chakra-ui/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getContinentBySlug, getContinents, Continent } from "../../api/api";
import { getImageUrl } from "../../utils/getImageUrl";

interface ContinentProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentProps) {
  console.log(continent.banner.url);
  return (
    <>
      <Head>
        <title>World Trip | {continent.title}</title>
      </Head>
      <Flex
        as="header"
        position="relative"
        align="center"
        justifyContent="center"
        bgImage={`url(${getImageUrl(continent.banner.url)})`}
        bgSize="cover"
        bgPosition="center"
        h={{ sm: "25vh" }}
        _after={{
          content: "''",
          bg: "rgba(0,0,0,0.4)",
          position: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
        }}
      >
        <Heading color="gray.50" zIndex="popover">
          {continent.title}
        </Heading>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await getContinents();

  const paths = continents.map((continent) => ({
    params: { slug: continent.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const response = await getContinentBySlug(String(slug));

  const continent = response[0];

  return { props: { continent } };
};
