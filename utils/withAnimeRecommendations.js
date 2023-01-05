import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const animeRecomendations = await response.json();
  return animeRecomendations;
}

export default function withAnimeRecommendations(Child) {
  return function AnimeRecommendations(props) {
    const url = process.env.NEXT_PUBLIC_ANIME_URL;
    const animeRecomendations = useSWR(
      `${url}1/recommendations`,
      fetcher
    );

    return (
      <Child animeRecomendations={animeRecomendations} {...props}/>
    );
  };
}
