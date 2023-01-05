import { fireEvent, render, screen } from "@testing-library/react";
import AnimeList from "../components/AnimeList";
import "@testing-library/jest-dom";

const anime = {
  data: [
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
  ]
};

describe('Anime List Component', () => {
  test('renders anime list component', () => {
    render(<AnimeList animes={anime} />);

    const element = screen.getByTestId("anime-list-content");
    const searchElement = screen.getByPlaceholderText('Find Anime');
    const paginationElement = screen.getByRole('navigation');

    expect(element).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
    expect(paginationElement).toBeInTheDocument();
  });

  test('renders anime list', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => anime
    });
    render(<AnimeList animes={anime}/>);

    const listItemElements = await screen.findAllByRole('list');
    expect(listItemElements).not.toHaveLength(0);
  });

  test('test onchange behavior on input text', () => {
    render(<AnimeList animes={anime} />);

    const searchElement = screen.getByPlaceholderText('Find Anime');

    fireEvent.change(searchElement, {
      target: {
        value: 'samurai'
      }
    });

    expect(searchElement.value).toBe('samurai');
  })
})
