import { Contact } from 'types/News';
import { FC } from 'react';
import styles from './ContactItem.module.scss';

const ContactItem: FC<Contact> = ({ title, value }): JSX.Element => (
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
