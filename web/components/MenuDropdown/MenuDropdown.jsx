import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import styles from './MenuDropdown.module.scss';

const ROUTES = [
    {
        href: '/comision-directiva',
        title: 'Comisión Directiva',
    },
    {
        href: '/cuerpo-activo',
        title: 'Cuerpo Activo',
    },
    {
        href: '/equipamiento',
        title: 'Equipamiento',
    },
    {
        href: '/institucional',
        title: 'Historia',
    },
];

export default function MenuDropdown({ title }) {
    return (
        <div className={styles.root}>
            <Menu>
                {({ open }) => (
                    <>
                        <span className={styles.menuButtonContainer}>
                            <Menu.Button className={styles.menuButton}>
                                <span>{title}</span>
                                <svg
                                    className={styles.arrow}
                                    aria-hidden="true"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Menu.Button>
                        </span>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className={`${styles.menuContainerRoot} bg-pattern`}
                            >
                                <div className={styles.menuOptions}>
                                    {ROUTES.map((option) => (
                                        <Menu.Item key={option.href}>
                                            {({ active }) => (
                                                <Link href={option.href}>
                                                    <a
                                                        className={`${
                                                            active
                                                                ? 'bg-red-500 text-gray-100'
                                                                : 'text-white'
                                                        } ${styles.option}`}
                                                    >
                                                        {option.title}
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}
