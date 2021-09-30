import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import PropTypes from 'prop-types';

function HeaderLink({ url, title }) {
    const router = useRouter();
    const isActive = useCallback(() => {
        return router.route === url ? 'active' : '';
    }, [url]);
    return (
        <Link href={url}>
            <a className={isActive(url)}>{title}</a>
        </Link>
    );
}

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default HeaderLink;
