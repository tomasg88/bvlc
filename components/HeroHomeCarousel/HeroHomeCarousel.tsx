import { FiPhone } from 'react-icons/fi';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import { DEFAULT_PAGE_TITLE } from 'utils/constants';
import CarouselUI from './CarouselUI/CarouselUI';
import styles from './HeroHomeCarousel.module.scss';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import SanityImage from 'components/SanityImage/SanityImage';
import { ImageProps } from 'next/image';

interface HeroHomeCarouselProps {
  arrows: boolean;
  images: ImageProps[];
}

interface CarouselProps {
  children: ReactNode;
  defaultWait: number;
  maxTurns: number;
}

const HeroHomeCarousel: FunctionComponent<HeroHomeCarouselProps> = ({
  arrows,
  images = [],
}): ReactElement => {
  const Carousel = makeCarousel((props) => (
    <CarouselUI arrows={arrows} {...props} />
  )) as FunctionComponent<CarouselProps>;

  return (
    <div className={styles.root}>
      <Fade cascade delay={900}>
        <p className={styles.legend}>Saber para servir</p>
      </Fade>
      <Fade delay={400}>
        <h1 className={styles.title}>{DEFAULT_PAGE_TITLE}</h1>
      </Fade>

      <div className={styles.buttonsContainer}>
        <Link href="/contacto" className={styles.button}>
          <FiPhone className={styles.icon} />
          <div className={styles.text}>
            {'Emergencias'}
            <span className={styles.number}>{'(0261) 498-0999'}</span>
          </div>
        </Link>
      </div>

      <div className={styles.carouselContainer}>
        <Carousel defaultWait={4000} maxTurns={99} /* wait for 1000 milliseconds */>
          {images.map((img, index) => (
            <Fade key={index + 1}>
              <SanityImage
                // TODO - agregar accesibilidad real
                alt={`Imagen principal ${index + 1}`}
                className={styles.image}
                height={800}
                priority
                src={img}
                style={{
                  objectFit: 'cover',
                }}
                width={1920}
              />
            </Fade>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroHomeCarousel;
