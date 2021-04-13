import Head from 'next/head';
import Link from 'next/link';

import { FaChevronLeft } from 'react-icons/fa';

import {
  Container,
  Content,
  Title,
  ImageBanner,
  DescriptionContainer,
  ButtonHome,
} from '../styles/error.styles';

export default function Error() {
  return (
    <Container>
      <Head>
        <title>404 Not Found | Star Wars Collection</title>
      </Head>
      <Content>
        <DescriptionContainer>
          <Title>404</Title>
          <span>You lost your own way, my son.</span>
        </DescriptionContainer>
        <ImageBanner>
          <img src="/assets/404.png" alt="" />
        </ImageBanner>
        <Link href="/">
          <ButtonHome>
            <FaChevronLeft />
            Accept the Dark Side
          </ButtonHome>
        </Link>
      </Content>
    </Container>
  );
}
