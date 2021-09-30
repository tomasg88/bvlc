import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import { FiPhone, FiInfo } from 'react-icons/fi';

import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import { BG_CONSTANTS, DEFAULT_PAGE_TITLE } from 'utils/constants';

export default function HeroHomeCarousel(props) {
    const CarouselUI = ({ position, total, handleClick, children }) => (
        <div className="relative w-full h-full mb-0 overflow-hidden border-b-2 border-red-600">
            {props.arrows ? (
                <div>
                    <div
                        className="absolute left-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-1/2"
                        onClick={handleClick}
                        data-position={position - 1}
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <div
                        className="absolute right-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-1/2"
                        right="true"
                        onClick={handleClick}
                        data-position={position + 1}
                    >
                        <AiOutlineArrowRight />
                    </div>
                    <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-red-500 bg-opacity-50 top-8">
                        {Array(...Array(total)).map((val, index) => (
                            <div
                                className="mx-1 text-4xl cursor-pointer"
                                key={index}
                                onClick={handleClick}
                                data-position={index}
                            >
                                {index === position ? (
                                    <BiRadioCircleMarked />
                                ) : (
                                    <BiRadioCircle />
                                )}
                            </div>
                        ))}
                    </div>
                    <div>{children}</div>
                </div>
            ) : (
                <div>
                    <div>{children}</div>
                </div>
            )}
        </div>
    );
    const Carousel = makeCarousel(CarouselUI);
    return (
        <div className="relative flex flex-col items-center justify-center py-40 overflow-hidden text-center text-white bg-gray-900">
            <Fade cascade delay={900}>
                <p className="relative z-10 max-w-xl px-6 mx-auto font-mono text-xl font-bold uppercase md:text-xl ">
                    Saber para servir
                </p>
            </Fade>
            <Fade delay={400}>
                <h1 className="relative z-10 max-w-xl px-6 py-3 mx-auto font-mono text-4xl font-thin md:text-6xl ">
                    {DEFAULT_PAGE_TITLE}
                </h1>
            </Fade>

            <div className="bottom-0 left-0 right-0 flex flex-col w-full max-w-xl p-6 pb-0 mx-auto sm:space-x-4 sm:flex-row sm:absolute ">
                <Link href="/contacto">
                    <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 mx-auto mt-6 text-red-800 duration-100 bg-gray-100 shadow-sm hover:bg-red-600 hover:text-red-100 hover:shadow-lg ">
                        <FiPhone className="mx-3 mb-2 text-4xl md:text-4xl" />
                        <div className="text-lg font-bold uppercase">
                            Emergencias
                            <span className="flex flex-col text-base text-left sm:text-center opacity-90">
                                (0261) 498-0999
                            </span>
                        </div>
                    </a>
                </Link>
                <Link href="/contacto">
                    <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 mx-auto mt-6 text-red-800 duration-100 bg-gray-100 shadow-sm hover:bg-red-600 hover:text-red-100 hover:shadow-lg ">
                        <FiInfo className="mx-3 mb-2 text-4xl md:text-4xl" />
                        <div className="text-lg font-bold uppercase">
                            Administración
                            <span className="flex flex-col text-base text-left sm:text-center opacity-90">
                                (0261) 498-6341
                            </span>
                        </div>
                        <span className="text-lg font-bold uppercase"></span>
                    </a>
                </Link>
            </div>

            <div className="absolute inset-0 z-0">
                <Carousel
                    defaultWait={4000}
                    maxTurns={99} /*wait for 1000 milliseconds*/
                >
                    <Fade>
                        <div>
                            {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                Equipamiento
              </p> */}
                            <img
                                className="object-cover w-full h-screen opacity-20"
                                alt=""
                                width="1800"
                                height="800"
                                src={BG_CONSTANTS.index_1}
                            />
                        </div>
                    </Fade>
                    <Fade>
                        <div>
                            {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                cuerpo activo
              </p> */}
                            <img
                                className="object-cover w-full h-screen opacity-20"
                                alt=""
                                width="1800"
                                height="800"
                                src={BG_CONSTANTS.team}
                            />
                        </div>
                    </Fade>
                    <Fade>
                        <div>
                            {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                comunidad
              </p> */}
                            <img
                                className="object-cover w-full h-screen opacity-20"
                                alt=""
                                width="1800"
                                height="800"
                                src={BG_CONSTANTS.index_3}
                            />
                        </div>
                    </Fade>
                </Carousel>
            </div>
        </div>
    );
}