import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
  padding: 2rem;
  height: 250px;

  margin: 0.5rem;

  background: var(--gray-800);
  border-radius: 5px;

  position: relative;
  overflow: hidden;

  cursor: pointer;
  transition: background 0.3s ease;
  animation: ${appearFromRight} 0.6s ease;

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    right: 0;
    bottom: 0;
    background: var(--blue-500);
    width: 0;
    height: 100%;
    transition: all 0.5s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
    button {
      background: var(--white);
      color: var(--blue-500);
    }
  }

  span {
    font-size: 0.75rem;
    position: relative;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 34px;
    width: 55%;
    margin-top: 0.5rem;
    position: relative;
  }

  button {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--white);
    font-size: 0.75rem;
    border-radius: 5px;
    transition: all 0.5s ease;

    margin-top: 1rem;
    padding: 1rem 3rem;
    box-sizing: border-box;

    position: absolute;
    bottom: 2rem;
  }

  div {
    position: absolute;
    top: 0px;
    right: -40px;
    height: calc(100% - 10px);
    background: transparent;

    h2 {
      font-size: max(14rem, 224px);
      line-height: 14rem;
      color: rgba(255, 255, 255, 0.2);

      text-transform: capitalize;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
    }

    &.firtItem {
      right: 15px;
    }
  }
`;
