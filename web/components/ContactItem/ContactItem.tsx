import { FunctionComponent, ReactElement } from "react";
import styles from "./ContactItem.module.scss";

interface IProps {
    title: string;
    value: string;
}

const ContactItem: FunctionComponent<IProps> = ({
    title,
    value,
}): ReactElement => (
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
