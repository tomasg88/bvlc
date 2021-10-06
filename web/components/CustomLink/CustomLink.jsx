import Link from 'next/link';
import PropTypes from 'prop-types';

function CustomLink({ href, title, target }) {
    return (
        <Link href={href}>
            <a target={target}>{title}</a>
        </Link>
    );
}

CustomLink.defaultProps = {
    target: '',
};

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string,
};

export default CustomLink;
