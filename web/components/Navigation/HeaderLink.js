import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const activeClassStyle = 'active';

export default function HeaderLink({ url, title }) {
    const router = useRouter();
    const isActive = useCallback(() => {
        return router.route === url ? activeClassStyle : '';
    }, [url]);
    return (
        <Link href={url}>
            <a className={isActive(url)}>{title}</a>
        </Link>
    );
}
