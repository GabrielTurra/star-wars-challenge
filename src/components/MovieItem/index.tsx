import { ReactElement } from 'react';

import { Container } from './styles';

interface MovieItemProps {
  children: ReactElement[];
}

export function MovieItem({ children }: MovieItemProps) {
  return <Container>{children}</Container>;
}
