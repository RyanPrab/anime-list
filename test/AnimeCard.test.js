import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AnimeCard from "../components/AnimeCard";

const anime = {
  data:
    {
      entry: {
      mal_id: 205,
      url: "https://myanimelist.net/anime/205/Samurai_Champloo",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1375/121599.jpg?s=690d61d9517bcc79a007c21f1e9b58e8",
          small_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599t.jpg?s=690d61d9517bcc79a007c21f1e9b58e8",
          large_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599l.jpg?s=690d61d9517bcc79a007c21f1e9b58e8"
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/1375/121599.webp?s=690d61d9517bcc79a007c21f1e9b58e8",
          small_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599t.webp?s=690d61d9517bcc79a007c21f1e9b58e8",
          large_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599l.webp?s=690d61d9517bcc79a007c21f1e9b58e8"
      }
      },
      title: "Samurai Champloo"
      },
      url: "https://myanimelist.net/recommendations/anime/1-205",
      votes: 118
    }
};

describe("Anime card", () => {
  test("renders a anime card",  () => {
    render(<AnimeCard anime={anime.data} />);

    const imageElement = screen.getByTestId("anime-image");
    const titleElement = screen.getByTestId("anime-title");
    const linkElement = screen.getByTestId("anime-link");

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  test("should navigate to detail page", () => {
    render(<AnimeCard anime={anime.data} />);
    const linkElement = screen.getByTestId("anime-link");
    expect(linkElement).toHaveAttribute('href', `anime/${anime.data.entry.mal_id}`);
  })
});
