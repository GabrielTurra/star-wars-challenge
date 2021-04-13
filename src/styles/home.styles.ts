import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto auto;

  @media (max-width: 1250px) {
    grid-template-columns: auto auto;
    padding: 20px;
  }
  @media (max-width: 840px) {
    grid-template-columns: auto;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  margin-bottom: 3.5rem;

  span {
    font-weight: 700;
  }
`;
