import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { MovieItem } from '../components/MovieItem';

import { convertToRoman } from '../utils/convertToRoman';

import { Container, Content, Title } from '../styles/home.styles';

interface MoviesItemProps {
  title: string;
  episode_id: number;
}

interface MoviesProps {
  movies: MoviesItemProps[];
}

export default function Home({ movies }: MoviesProps) {
  return (
    <>
      <Head>
        <title>
          Star Wars Collection - The best releases of your favorite franchise
          movies
        </title>

        <meta
          name="description"
          content="Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon."
        />
      </Head>

      <Container>
        <Title>
          <span>Classic Movies</span> Collection
        </Title>
        <Content>
          {movies.map(item => (
            <Link href={`/movies/${item.episode_id}`} key={item.episode_id}>
              <a>
                <MovieItem key={item.episode_id}>
                  <span>Episode {convertToRoman(item.episode_id)}</span>
                  <p>{item.title}</p>
                  <button type="button">More Details</button>
                  <div className={item.episode_id === 1 ? 'firtItem' : ''}>
                    <h2>{convertToRoman(item.episode_id)}</h2>
                  </div>
                </MovieItem>
              </a>
            </Link>
          ))}
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await fetch('https://swapi.dev/api/films/')
    .then(items => items.json())
    .then(data => data.results);

  return {
    props: {
      movies,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
