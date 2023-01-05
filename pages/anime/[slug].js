import Head from 'next/head';
import { DefaultLayout as Layout } from '../../components/Layout'
import AnimeDetail from '../../components/AnimeDetail';

export default function AnimeDetailPage(props) {
  const { anime } = props;

  const title = anime.data.title;

  return (
    <Layout>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col items-center flex-1 flex-shrink-0 space-y-10 container mx-auto py-6 mt-4">
          <AnimeDetail anime={anime.data} />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { NEXT_PUBLIC_ANIME_URL } = process.env;

  const { query } = context;
  const animeId = query.slug;

  let anime;

  try {
    const endpoint = `${NEXT_PUBLIC_ANIME_URL}${animeId}`;
    const response = await fetch(endpoint);
    anime = await response.json();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }

  if (!anime) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      anime: anime || null
    }
  }
}
