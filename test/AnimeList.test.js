import { render, screen } from "@testing-library/react";
import AnimeList from "../components/AnimeList";

describe('Anime List Component', () => {
  test('renders anime list', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{
        id: 1,
        title: "Anime Test"
      }]
    });
    render(<AnimeList/>);

    const listItemElements = await screen.findAllByRole('list');
    expect(listItemElements).not.toHaveLength(0);
  })
})
