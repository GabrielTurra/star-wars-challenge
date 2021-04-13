import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import React from 'react';

import pt, { parseISO, format } from 'date-fns';

import { convertToRoman } from '../../utils/convertToRoman';
import { getImageLink } from '../../utils/getImageLink';

import {
  Container,
  Content,
  Title,
  ImageBanner,
  DescriptionContainer,
  ReleaseInformation,
  MovieResume,
} from '../../styles/movies.styles';

interface MoviesItemProps {
  movie: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    formated_release_date: string;
  };
}

export default function MoviePage({ movie }: MoviesItemProps) {
  return (
    <div>
      <Head>
        <title>{movie.title} | Star Wars Collection</title>
      </Head>

      <Container>
        <Content>
          <ImageBanner>
            <img
              src={`../assets/${getImageLink(movie.episode_id, movie.title)}`}
              alt=""
            />
          </ImageBanner>

          <DescriptionContainer>
            <span>Episode {convertToRoman(movie.episode_id)}</span>
            <Title>{movie.title}</Title>

            <ReleaseInformation>
              <div>
                <span>Director</span>
                <p>{movie.director}</p>
              </div>
              <div>
                <span>Producer</span>
                <p>{movie.producer}</p>
              </div>
              <div>
                <span>Release Date</span>
                <p>{movie.formated_release_date}</p>
              </div>
            </ReleaseInformation>
            <MovieResume>{`"${movie.opening_crawl}"`}</MovieResume>
          </DescriptionContainer>
        </Content>
      </Container>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  const movies = await fetch('https://swapi.dev/api/films/')
    .then(items => items.json())
    .then(data => data.results);

  const movie = movies.find(item => item.episode_id === Number(id));

  if (!movie) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: {
      movie: {
        ...movie,
        formated_release_date: format(
          parseISO(movie.release_date),
          "dd MMMM',' yyyy",
          { locale: pt },
        ),
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
