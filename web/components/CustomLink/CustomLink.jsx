import Link from 'next/link';

export default function CustomLink({ href, title, target }) {
    return (
        <Link href={href}>
            <a target={target}>{title}</a>
        </Link>
    );
}
