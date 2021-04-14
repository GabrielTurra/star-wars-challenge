import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Image
          src="/assets/star-wars-logo.svg"
          alt="Star Wars Logo"
          layout="fill"
          priority
        />
      </Link>
    </Container>
  );
}
