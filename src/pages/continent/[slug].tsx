import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import {
  getContinentBySlug,
  getContinents,
  Continent,
  getTopCitiesByContinent,
  City,
} from "../../api/api";
import ContinentBanner from "../../components/Banner/ContinentBanner";
import CitiesCard from "../../components/CitiesCards";
import Summary from "../../components/Summary";
import { getImageUrl } from "../../utils/getImageUrl";

interface ContinentProps {
  continent: Continent;
  cities: City[];
}

export default function ContinentPage({ continent, cities }: ContinentProps) {
  return (
    <>
      <Head>
        <title>World Trip | {continent.title}</title>
      </Head>
      <ContinentBanner title={continent.title} banner={continent.banner.url} />
      <Summary
        description={continent.description}
        total_countries={continent.total_countries}
        total_languages={continent.total_languages}
        top_hundred_cities={continent.top_hundred_cities}
      />
      <CitiesCard cities={cities} />
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
  const continent_res = await getContinentBySlug(String(slug));

  const continent: Continent = continent_res[0];

  const cities = await getTopCitiesByContinent(String(continent.title));

  return { props: { continent, cities } };
};
