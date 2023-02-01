import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { DEFAULT_PAGE_TITLE, BG_CONSTANTS } from 'utils/constants';
import SiteMap from '../SiteMap/SiteMap';
import { FunctionComponent, ReactElement } from 'react';

const Footer: FunctionComponent = (): ReactElement => (
  <footer className={styles.root}>
    <div className={styles.container}>
      <div className={styles.siteMap}>
        <SiteMap />
        <Link href="/">
          <a className={styles.logoContainer}>
            <Image
              src="/logo-bomberos-cuyo.png"
              alt={DEFAULT_PAGE_TITLE}
              width={80}
              height={100}
              objectFit="fill"
              quality={80}
              layout="fixed"
            />
            <span className={styles.logoTitle}>
              Bomberos Voluntarios <br /> de Luján de Cuyo
            </span>
          </a>
        </Link>
      </div>
      <div className={styles.footerSpecials}>
        <Link href={BG_CONSTANTS.spai_pdf}>
          <a target="_blank" rel="noopener noreferrer" className={styles.special}>
            <Image
              src={BG_CONSTANTS.escudo_spai}
              alt="Spai"
              quality={80}
              className="w-full h-auto mx-auto"
              layout="intrinsic"
              width={57}
              height={74}
            />
            <span className={styles.text}> En convenio de cooperación con fundación SPAI </span>
          </a>
        </Link>
        <Link href={BG_CONSTANTS.iram_pdf}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.special} ${styles.left}`}
          >
            <Image
              src={BG_CONSTANTS.iram}
              alt="Certificado Iram"
              quality={80}
              className="w-full h-auto"
              layout="intrinsic"
              width={60}
              height={74}
            />
            <span className={styles.text}>Certificación Iram Referencial N 12</span>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
