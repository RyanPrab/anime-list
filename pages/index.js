import Head from 'next/head';
import { DefaultLayout as Layout } from '../components/Layout'
import { withAnimeRecommendations } from '../utils';
import AnimeList from '../components/AnimeList';

function Home(props) {
  const { animeRecomendations } = props;
  const { data: animeData, error: animeError } = animeRecomendations;

  return (
    <Layout>
      <div>
        <Head>
          <title>Anime List</title>
          <meta name="description" content="Anime List" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          data-testid="container"
          className="flex flex-col items-center flex-1 flex-shrink-0 space-y-10 container mx-auto py-6 mt-4"
        >
          <AnimeList animes={animeData}/>
        </div>
      </div>
    </Layout>
  )
}

export default withAnimeRecommendations(Home);
