import Link from 'next/link';
import { FunctionComponent, ReactElement } from 'react';

interface CustomLinkProps {
  href: string;
  title: string;
  target?: string;
}

const CustomLink: FunctionComponent<CustomLinkProps> = ({
  href,
  title,
  target = '',
}): ReactElement => (
  <Link href={href} target={target}>
    {title}
  </Link>
);

export default CustomLink;
