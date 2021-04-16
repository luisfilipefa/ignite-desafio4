import axios from "axios";

export interface Continent {
  id: number;
  title: string;
  description: string;
  total_countries: number;
  total_languages: number;
  slug: string;
  top_hundred_cities: number;
  banner: {
    url: string;
  };
}

const API_URL = "http://localhost:1337";

export const getContinents = async () => {
  const response = await axios.get(`${API_URL}/continents`);

  const continents: Continent[] = response.data;

  return continents;
};

export const getContinentBySlug = async (slug: string) => {
  const response = await axios.get(`${API_URL}/continents?slug=${slug}`);

  const continent: Continent = response.data;

  return continent;
};
