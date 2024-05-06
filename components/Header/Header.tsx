import HeaderLink from '../HeaderLink/HeaderLink';
import Link from 'next/link';
import Image from 'next/image';
import Headroom from 'react-headroom';
import RrssIcon from '../RrssIcon/RrssIcon';
import { RrssContext } from '../context';
import { FunctionComponent, ReactElement, useContext } from 'react';
import { DEFAULT_PAGE_TITLE, DEFAULT_PAGE_IMAGE } from 'utils/constants';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import styles from './Header.module.scss';

const Header: FunctionComponent = (): ReactElement => {
  const rrss = useContext(RrssContext);
  return (
    <Headroom disableInlineStyles>
      <div className="w-full bg-red-700 text-white py-1">
        <p className={'text-center tracking-wider'}>Emergencias: (0261) 498-0999</p>
      </div>
      <div>
        <header className={styles.container}>
          <div className={'flex justify-between items-center'}>
            <Link href="/">
              <Image
                src={DEFAULT_PAGE_IMAGE}
                width={80}
                height={100}
                quality={50}
                alt={DEFAULT_PAGE_TITLE}
                style={{
                  objectFit: 'fill',
                }}
              />
            </Link>
            <div className={styles.navItemsWrapper}>
              <div className={styles.navBackground}>&nbsp;</div>
              <nav>
                <MenuDropdown title="Institucional" />
                <HeaderLink className={styles.navItem} href="/noticias" title="Noticias" />
                <HeaderLink className={styles.navItem} href="/academia" title="Academia" />
                <HeaderLink className={styles.navItem} href="/galeria" title="Galería" />
                <HeaderLink className={styles.navItem} href="/donaciones" title="Donaciones" />
                <HeaderLink className={styles.navItem} href="/contacto" title="Contacto" />
              </nav>
            </div>
            <div>
              {rrss &&
                rrss.map((rs) => (
                  <RrssIcon
                    className={'inline-block first:mr-3 text-3xl text-white'}
                    key={rs._id}
                    rrss={rs.rrss}
                    url={rs.rrssUrl}
                  />
                ))}
            </div>
            {/* TODO - Pending to include SPAI and IRAM logos */}
            {/* <div className={styles.rightItems}>
              <div className={styles.rightUpperItems}>
                <a
                  href={BG_CONSTANTS.spai_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spaiLink}
                >
                  <Image
                    src={BG_CONSTANTS.escudo_spai}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={50}
                    className={styles.rightUpperImage}
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={BG_CONSTANTS.iram_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iramLink}
                >
                  <Image
                    src={BG_CONSTANTS.sello_iram}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={50}
                    className={styles.rightUpperImage}
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div> */}
          </div>
        </header>
      </div>
    </Headroom>
  );
};

export default Header;
