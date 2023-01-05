import AnimeDetail from "../components/AnimeDetail";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const anime = {
  data: {
  mal_id: 205,
  url: "https://myanimelist.net/anime/205/Samurai_Champloo",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1375/121599.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599t.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599l.jpg"
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1375/121599.webp",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599t.webp",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1375/121599l.webp"
    }
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null
    }
  },
  approved: true,
  titles: [
    {
      type: "Default",
      title: "Samurai Champloo"
    },
    {
      type: "Synonym",
      title: "SAMURAI CHAMPLOO"
    },
    {
      type: "Japanese",
      title: "サムライチャンプルー"
    },
    {
      type: "English",
      title: "Samurai Champloo"
    }
  ],
  title: "Samurai Champloo",
  title_english: "Samurai Champloo",
  title_japanese: "サムライチャンプルー",
  title_synonyms: [
  "SAMURAI CHAMPLOO"
  ],
  type: "TV",
  source: "Original",
  episodes: 26,
  status: "Finished Airing",
  airing: false,
  aired: {
    from: "2004-05-20T00:00:00+00:00",
    to: "2005-03-19T00:00:00+00:00",
    prop: {
      from: {
        day: 20,
        month: 5,
        year: 2004
      },
      to: {
        day: 19,
        month: 3,
        year: 2005
      }
    },
    string: "May 20, 2004 to Mar 19, 2005"
  },
  duration: "24 min per ep",
  rating: "R - 17+ (violence & profanity)",
  score: 8.5,
  scored_by: 596228,
  rank: 126,
  popularity: 104,
  members: 1152145,
  favorites: 35013,
  synopsis: "Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! With a group of samurai now incessantly harassing her, Fuu desperately calls upon another samurai in the shop, Mugen, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. Unfortunately, Mugen decides to pick a fight with the unwilling ronin Jin, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. The only problem is, they end up destroying the entire shop as well as accidentally killing the local magistrate's son. For their crime, the two samurai are captured and set to be executed. However, they are rescued by Fuu, who hires the duo as her bodyguards. Though she no longer has a place to return to, the former waitress wishes to find a certain samurai who smells of sunflowers and enlists the help of the now exonerated pair to do so. Despite initially disapproving of this idea, the two eventually agree to assist the girl in her quest; thus, the trio embark upon an adventure to find this mysterious warrior—that is, if Fuu can keep Mugen and Jin from killing each other. Set in an alternate Edo Period of Japan, Samurai Champloo follows the journey of these three eccentric individuals in an epic quest full of action, comedy, and dynamic sword fighting, all set to the beat of a unique hip-hop infused soundtrack. [Written by MAL Rewrite]",
  background: "Samurai Champloo is the only anime to have featured music from the Japanese hip-hop producer Nujabes prior to his death in 2010. The anime also spawned the 2006 video game Samurai Champloo: Sidetracked for the PlayStation 2. The show aired in two parts, with the first half airing Thursdays at 2:28 AM on Fuji TV from May 20, 2004 to September 23, 2004, and the second half airing Saturdays at 10:30 AM on BS Fuji from January 22, 2005 to March 19, 2005. Geneon Entertainment USA originally licensed and released the show in North America, but after their closure in late 2007, the show went out of print. FUNimation Entertainment later entered a distribution deal with Geneon to distribute some of their titles, including Samurai Champloo. After the distribution deal ended, FUNimation later outright licensed the series.",
  season: "spring",
  year: 2004,
  broadcast: {
    day: "Saturdays",
    time: "10:30",
    timezone: "Asia/Tokyo",
    string: "Saturdays at 10:30 (JST)"
  },
  producers: [
    {
      mal_id: 123,
      type: "anime",
      name: "Victor Entertainment",
      url: "https://myanimelist.net/anime/producer/123/Victor_Entertainment"
    },
    {
      mal_id: 169,
      type: "anime",
      name: "Fuji TV",
      url: "https://myanimelist.net/anime/producer/169/Fuji_TV"
    },
    {
      mal_id: 271,
      type: "anime",
      name: "Barnum Studio",
      url: "https://myanimelist.net/anime/producer/271/Barnum_Studio"
    },
    {
      mal_id: 382,
      type: "anime",
      name: "Tokuma Shoten",
      url: "https://myanimelist.net/anime/producer/382/Tokuma_Shoten"
    },
    {
      mal_id: 464,
      type: "anime",
      name: "flying DOG",
      url: "https://myanimelist.net/anime/producer/464/flying_DOG"
    }
  ],
  licensors: [
    {
      mal_id: 102,
      type: "anime",
      name: "Funimation",
      url: "https://myanimelist.net/anime/producer/102/Funimation"
    },
    {
      mal_id: 1459,
      type: "anime",
      name: "Geneon Entertainment USA",
      url: "https://myanimelist.net/anime/producer/1459/Geneon_Entertainment_USA"
    }
  ],
  studios: [
    {
      mal_id: 32,
      type: "anime",
      name: "Manglobe",
      url: "https://myanimelist.net/anime/producer/32/Manglobe"
    }
  ],
  genres: [
    {
      mal_id: 1,
      type: "anime",
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action"
    },
    {
      mal_id: 2,
      type: "anime",
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure"
    },
    {
      mal_id: 4,
      type: "anime",
      name: "Comedy",
      url: "https://myanimelist.net/anime/genre/4/Comedy"
    }
  ],
  explicit_genres: [ ],
  themes: [
    {
      mal_id: 13,
      type: "anime",
      name: "Historical",
      url: "https://myanimelist.net/anime/genre/13/Historical"
    },
    {
      mal_id: 21,
      type: "anime",
      name: "Samurai",
      url: "https://myanimelist.net/anime/genre/21/Samurai"
    }
  ],
  demographics: [ ]
  }
};

describe("Anime Detail component", () => {
  test("renders a anime detail component",  () => {
    render(<AnimeDetail anime={anime.data} />);
    const linkElement = screen.getByTestId("home-link");
    const imageElement = screen.getByTestId("anime-image");
    const titleElement = screen.getByTestId("anime-title");
    const scoreElement = screen.getByTestId("anime-score");
    const synopsisElement = screen.getByTestId("anime-synopsis");
    const backgroundElement = screen.getByTestId("anime-background");

    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(scoreElement).toBeInTheDocument();
    expect(synopsisElement).toBeInTheDocument();
    expect(backgroundElement).toBeInTheDocument();
  });

  test("should navigate to homepage", () => {
    render(<AnimeDetail anime={anime.data} />);
    const linkElement = screen.getByTestId("home-link");
    expect(linkElement).toHaveAttribute('href', '/');
  });

  test("show more/less synopsis", () => {
    render(<AnimeDetail anime={anime.data} />);

    const button = screen.getByTestId("button-synopsis");

    expect(button.textContent).toBe("Show More");
    fireEvent.click(button);
    expect(button.textContent).toBe("Show Less");
  });

  test("show more/less background", () => {
    render(<AnimeDetail anime={anime.data} />);

    const button = screen.getByTestId("button-background");

    expect(button.textContent).toBe("Show More");
    fireEvent.click(button);
    expect(button.textContent).toBe("Show Less");
  });
});
