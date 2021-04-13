import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const ImageBanner = styled.div`
  img {
    width: 100%;
    max-width: 420px;
  }
  @media (max-width: 1050px) {
    text-align: center;
  }
`;
export const ReleaseInformation = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 150px 150px 150px;

  div {
    span {
      color: var(--gray-300);
    }
    p {
      font-weight: bold;
      margin-top: 5px;
    }
  }

  @media (max-width: 1050px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 840px) {
    grid-template-columns: auto;

    div {
      margin-top: 1rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 4rem;
  flex: 1;

  > span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (max-width: 1050px) {
    margin-top: 4rem;
  }
`;

export const MovieResume = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 32px;
  margin-top: 3.5rem;
  color: var(--gray-300);
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 72px;
`;
