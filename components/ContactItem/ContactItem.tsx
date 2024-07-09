import { FC } from 'react';
import { General } from 'types/models';
import styles from './ContactItem.module.scss';

type ContactItem = {
  title: General['title'];
  value: General['value'];
};

const ContactItem: FC<ContactItem> = ({ title, value }): JSX.Element => (
  <div className={styles.root}>
    <dl>
      <div className={styles.dataContainer}>
        <dt className={styles.title}>{title}</dt>
        <dd className={styles.value}>{value}</dd>
      </div>
    </dl>
  </div>
);

export default ContactItem;
