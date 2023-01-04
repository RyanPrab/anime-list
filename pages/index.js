import Head from 'next/head';
import { DefaultLayout as Layout } from '../components/Layout'
import { withAnimeRecommendations } from '../utils';

function Home(props) {
  const { animeRecomendations } = props;
  const { data: animeData, error: animeError } = animeRecomendations;
  console.log(animeData);

  return (
    <Layout>
      <div>
        <Head>
          <title>Anime List</title>
          <meta name="description" content="Anime List" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col items-center flex-1 flex-shrink-0 space-y-10">
          Anime List
        </div>
      </div>
    </Layout>
  )
}

export default withAnimeRecommendations(Home);
