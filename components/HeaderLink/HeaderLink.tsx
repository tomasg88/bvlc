import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactElement, useMemo } from 'react';

interface HeaderLinkProps {
  url: string;
  title: string;
}

const HeaderLink: FunctionComponent<HeaderLinkProps> = ({ url, title }): ReactElement => {
  const router = useRouter();
  const isActive = useMemo(() => (router.route === url ? 'active' : ''), [url]);

  return (
    <Link href={url} className={isActive}>
      {title}
    </Link>
  );
};

export default HeaderLink;
