import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  margin: 4rem 0;

  display: flex;
  justify-content: center;

  div {
    position: static !important;
  }

  img {
    cursor: pointer;
    position: static !important;
    width: 100% !important;
    height: auto !important;
    min-width: auto !important;
    max-width: 420px !important;
    min-height: auto !important;
    max-height: auto !important;
  }
`;
