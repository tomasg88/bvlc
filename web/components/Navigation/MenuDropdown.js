import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

export default function MenuDropdown({ title }) {
    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                    <>
                        <span className="rounded-md shadow-sm">
                            <Menu.Button className="inline-flex justify-center w-full px-5 py-2 font-sans text-sm font-bold text-white uppercase border-b-4 border-transparent outline-none ring-0 lg:text-lg hover:border-white">
                                <span>{title}</span>
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1 transform lg:translate-y-1"
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
                            <Menu.Items className="absolute left-0 right-0 w-full origin-top-right bg-red-600 shadow-lg outline-none">
                                <div className="py-3">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/comision-directiva">
                                                <a
                                                    className={`${
                                                        active
                                                            ? 'bg-red-500 text-gray-100'
                                                            : 'text-white'
                                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                                >
                                                    Comisión Directiva
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/cuerpo-activo">
                                                <a
                                                    className={`${
                                                        active
                                                            ? 'bg-red-500 text-gray-100'
                                                            : 'text-white'
                                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                                >
                                                    Cuerpo Activo
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/equipamiento">
                                                <a
                                                    className={`${
                                                        active
                                                            ? 'bg-red-500 text-gray-100'
                                                            : 'text-white'
                                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                                >
                                                    Equipamiento
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/institucional">
                                                <a
                                                    className={`${
                                                        active
                                                            ? 'bg-red-500 text-gray-100'
                                                            : 'text-white'
                                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                                >
                                                    Historia
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}
