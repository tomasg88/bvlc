import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactElement, useMemo } from 'react';
import PropTypes from 'prop-types';

interface IProps {
  url: string;
  title: string;
}

const HeaderLink: FunctionComponent<IProps> = ({ url, title }): ReactElement => {
  const router = useRouter();
  const isActive = useMemo(() => (router.route === url ? 'active' : ''), [url]);

  return (
    <Link href={url} className={isActive}>
      {title}
    </Link>
  );
};

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderLink;