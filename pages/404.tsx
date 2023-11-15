import Button from 'components/Button/Button';
import Layout from 'components/Layout/Layout';
import React, { FC } from 'react';
import styles from 'styles/Home.module.css';

const NotFound: FC = (): JSX.Element => {
  return (
    <Layout title="Not found">
      <div className={`${styles.container} pt-60 pb-44 bg-gray-100 text-center`}>
        <h1 className="text-3xl">La página a la que quiere acceder no existe.</h1>
        <br />

        <Button href={'/'} text="Ir al Inicio" target={'_self'} />
      </div>
    </Layout>
  );
};

export default NotFound;
