import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Offcanvas from '../Offcanvas/Offcanvas';
import SimpleReactLightbox from 'simple-react-lightbox';
import Head from 'next/head';
import {
  DEFAULT_PAGE_DESCRIPTION,
  DEFAULT_PAGE_TITLE,
  DEFAULT_PAGE_URL,
  DEFAULT_PAGE_IMAGE,
} from 'utils/constants';
import PropTypes from 'prop-types';
import { FC } from 'react';

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ title, description, image, children }) => {
  const auxTitle = title && title !== '' ? `${title} | ${DEFAULT_PAGE_TITLE}` : DEFAULT_PAGE_TITLE;
  const auxDesc = description && description !== '' ? description : DEFAULT_PAGE_DESCRIPTION;
  const auxImage = image || DEFAULT_PAGE_URL + DEFAULT_PAGE_IMAGE;

  return (
    <>
      <Head>
        <title>{auxTitle}</title>
        <meta name="title" content={auxTitle} />
        <meta name="description" content={auxDesc} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DEFAULT_PAGE_URL} />
        <meta property="og:title" content={auxTitle} />
        <meta property="og:description" content={auxDesc} />
        <meta property="og:image" content={auxImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={DEFAULT_PAGE_URL} />
        <meta property="twitter:title" content={auxTitle} />
        <meta property="twitter:description" content={auxDesc} />
        <meta property="twitter:image" content={auxImage} />

        {/* Otros */}
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="theme-color" content="#dc2626" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc2626" />
      </Head>
      <Offcanvas />
      <Header />
      <div className="pt-20 bg-red-600 bg-pattern">
        <SimpleReactLightbox>
          <main className="overflow-x-hidden">{children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: '',
  description: '',
  image: '',
};

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Layout;
