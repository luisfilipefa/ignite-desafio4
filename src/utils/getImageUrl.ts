export const getImageUrl = (imageUrl: string) => {
  const API_URL = "http://localhost:1337";

  if (imageUrl.startsWith("/")) {
    return `${API_URL}${imageUrl}`;
  }
};
