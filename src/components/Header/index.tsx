import Link from 'next/link';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <img src="/assets/star-wars-logo.svg" alt="" />
      </Link>
    </Container>
  );
}
