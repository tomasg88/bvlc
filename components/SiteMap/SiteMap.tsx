import React, { FunctionComponent, ReactElement, useMemo, useContext } from 'react';
import styles from './SiteMap.module.scss';
import { RrssContext } from '../context';
import CustomLink from '../CustomLink/CustomLink';

const SiteMap: FunctionComponent = (): ReactElement => {
  const rrss = useContext(RrssContext);

  const firstColumn = useMemo(
    () => (
      <div className={styles.siteMapColumn}>
        <span className={styles.columnTitle}>Noticias</span>

        <CustomLink href="/academia" title="Academia" />
        <CustomLink href="/galeria" title="Galería" />
        {rrss?.map((rs) => (
          <CustomLink key={rs._id} title={`Ir a ${rs.rrss}`} href={rs.rrssUrl} target="_blank" />
        ))}
      </div>
    ),
    []
  );

  const secondColumn = useMemo(
    () => (
      <div className={styles.siteMapColumn}>
        <span className={styles.columnTitle}>Institucional</span>
        <CustomLink href="/institucional" title="Historia" />
        <CustomLink href="/libro-amigos" title="2 Amigos por un Sueño" />
        <CustomLink href="/comision-directiva" title="Comisión Directiva" />
        <CustomLink href="/cuerpo-activo" title="Cuerpo Activo" />
        <CustomLink href="/equipamiento" title="Equipamiento" />
      </div>
    ),
    []
  );

  const thirdColumn = useMemo(
    () => (
      <div className={styles.siteMapColumn}>
        <span className={styles.columnTitle}>Contacto</span>
        {[
          'Emergencias - 0261 498 0999',
          'Admistración - 0261 498 6341',
          'info@bomberoslujanmza.com.ar',
        ].map((title) => (
          <CustomLink key={title} href="/contacto" title={title} />
        ))}
      </div>
    ),
    []
  );

  return (
    <>
      {firstColumn}
      {secondColumn}
      {thirdColumn}
    </>
  );
};

export default SiteMap;
