import PropTypes from "prop-types";
import { FunctionComponent, ReactElement } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

const targetValues = ["_blank", "_self", "_parent", "_top"];

interface IProp {
    text: string;
    href: string;
    target?: string;
}

const Button: FunctionComponent<IProp> = ({
    text,
    href,
    target,
}): ReactElement => (
    <div className={styles.root}>
        <Link href={href}>
            <a target={target} className={styles.text}>
                {text}
            </a>
        </Link>
    </div>
);

Button.defaultProps = {
    target: "_self",
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(targetValues),
};

export default Button;
