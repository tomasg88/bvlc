import Link from 'next/link';
import PropTypes from 'prop-types';
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

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default CustomLink;
