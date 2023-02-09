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
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo-bomberos-cuyo.png"
            alt={DEFAULT_PAGE_TITLE}
            width={80}
            height={100}
            quality={80}
            style={{
              objectFit: 'fill',
            }}
          />
          <span className={styles.logoTitle}>
            Bomberos Voluntarios <br /> de Luján de Cuyo
          </span>
        </Link>
      </div>
      <div className={styles.footerSpecials}>
        <Link
          href={BG_CONSTANTS.spai_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.special}
        >
          <Image
            src={BG_CONSTANTS.escudo_spai}
            alt="Spai"
            quality={80}
            className="h-auto mx-auto"
            width={57}
            height={74}
          />
          <span className={styles.text}> En convenio de cooperación con fundación SPAI </span>
        </Link>
        <Link
          href={BG_CONSTANTS.iram_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.special} ${styles.left}`}
        >
          <Image
            src={BG_CONSTANTS.iram}
            alt="Certificado Iram"
            quality={80}
            className="h-auto"
            width={60}
            height={74}
          />
          <span className={styles.text}>Certificación Iram Referencial N 12</span>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
