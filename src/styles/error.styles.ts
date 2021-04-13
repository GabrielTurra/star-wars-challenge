import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const ImageBanner = styled.div`
  margin-top: 2rem;
  img {
    width: 100%;
    max-width: 420px;
  }
  @media (max-width: 1050px) {
    text-align: center;
  }
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  > span {
    font-size: 1.5rem;
    font-weight: 500;
    display: block;
    margin-top: 1rem;
  }

  @media (max-width: 1050px) {
    margin-top: 4rem;
  }
`;

export const Title = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-transform: capitalize;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 72px;
`;

export const ButtonHome = styled.div`
  width: 350px;
  padding: 2rem 3rem;
  border-radius: 350px;
  background: var(--gray-800);
  margin: 2rem auto 0;
  font-size: 1rem;

  color: white;
  font-weight: 700;

  cursor: pointer;
  transition: filter 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.4rem;
    line-height: 1.4rem;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;
