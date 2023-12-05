import Link from 'next/link';
import { FunctionComponent, ReactElement } from 'react';

interface IProps {
  href: string;
  title: string;
  target?: string;
}

const CustomLink: FunctionComponent<IProps> = ({ href, title, target }): ReactElement => (
  <Link href={href} target={target}>
    {title}
  </Link>
);

CustomLink.defaultProps = {
  target: '',
};

export default CustomLink;
