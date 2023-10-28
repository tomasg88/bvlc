import HeaderLink from '../HeaderLink/HeaderLink';
import Link from 'next/link';
import Image from 'next/image';
import Headroom from 'react-headroom';
import RrssIcon from '../RrssIcon/RrssIcon';
import { Context } from '../context';
import { FunctionComponent, ReactElement, useContext } from 'react';
import { DEFAULT_PAGE_TITLE, BG_CONSTANTS } from 'utils/constants';
import MenuDropdown from '../MenuDropdown/MenuDropdown';
import styles from './Header.module.scss';

const Header: FunctionComponent = (): ReactElement => {
  const [rrss] = useContext(Context);
  return (
    <Headroom disableInlineStyles>
      <div className={'bg-pattern'}>
        <header className={styles.container}>
          <div className={styles.main}>
            <Link href="/" legacyBehavior>
              <a className={styles.logoContainer}>
                <Image
                  src="/logo-bomberos-cuyo.png"
                  width={80}
                  height={100}
                  objectFit="fill"
                  quality={50}
                  layout="fixed"
                  alt={DEFAULT_PAGE_TITLE}
                />
                <span className={styles.logoTitle}>
                  Bomberos Voluntarios <br /> de Luján de Cuyo
                </span>
              </a>
            </Link>
            <div className={styles.rightItems}>
              <div className={styles.rightUpperItems}>
                <a
                  href={BG_CONSTANTS.spai_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.spaiLink}
                >
                  <span className={styles.rightUpperText}>Fundación SPAI</span>
                  <Image
                    src={BG_CONSTANTS.escudo_spai}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={50}
                    className={styles.rightUpperImage}
                    layout="fixed"
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
                  <span className={styles.rightUpperText}>Certificación IRAM</span>
                  <Image
                    src={BG_CONSTANTS.sello_iram}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={50}
                    className={styles.rightUpperImage}
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </a>
                <div className={styles.rightUpperInfo}>
                  <span className={styles.emergencyContact}>
                    <small className={styles.emergencyText}>Emergencias</small> (0261) 498-0999
                  </span>
                  {rrss &&
                    rrss.map((rs) => (
                      <RrssIcon
                        className={styles.rrss}
                        key={rs._id}
                        rrss={rs.rrss}
                        url={rs.rrssUrl}
                      />
                    ))}
                </div>
              </div>
              <nav className={styles.navItems}>
                <MenuDropdown title="Institucional" />
                <HeaderLink url="/noticias" title="Noticias" />
                <HeaderLink url="/academia" title="Academia" />
                <HeaderLink url="/galeria" title="Galería" />
                <HeaderLink url="/contacto" title="Contacto" />
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Headroom>
  );
};

export default Header;
