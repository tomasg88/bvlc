import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, FunctionComponent, ReactElement, useMemo } from 'react';

interface HeaderLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

const HeaderLink: FunctionComponent<HeaderLinkProps> = ({
  href,
  title,
  className,
}): ReactElement => {
  const router = useRouter();
  const isActive = useMemo(() => (router.route === href ? 'active' : ''), [href]);

  if (!href) {
    return <p className={`${className} ${isActive}`}>{title}</p>;
  }

  return (
    <Link href={href} className={`${className} ${isActive}`}>
      {title}
    </Link>
  );
};

export default HeaderLink;
