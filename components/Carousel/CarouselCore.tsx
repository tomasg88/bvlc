import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import styles from './Carousel.module.scss';

export interface CarouselProps {
  arrows: boolean;
  children: ReactNode;
  handleClick?: () => void;
  position?: number;
  total?: string[];
  defaultWait: number;
  maxTurns: number;
}

const Controls = ({ handleClick, position, total }) => (
  <>
    <div
      className={`${styles.arrows} ${styles.arrowLeft}`}
      onClick={handleClick}
      data-position={position - 1}
    >
      <AiOutlineArrowLeft />
    </div>
    <div
      className={`${styles.arrows} ${styles.arrowRight}`}
      onClick={handleClick}
      data-position={position + 1}
    >
      <AiOutlineArrowRight />
    </div>
    <div className={styles.bullets}>
      {Array(...Array(total)).map((val, index) => (
        <div
          className="mx-1 text-4xl cursor-pointer"
          key={index}
          onClick={handleClick}
          data-position={index}
        >
          {index === position ? <BiRadioCircleMarked /> : <BiRadioCircle />}
        </div>
      ))}
    </div>
  </>
);

export const CarouselCore: FunctionComponent<CarouselProps> = ({
  arrows = false,
  children,
  handleClick,
  position,
  total,
}): ReactElement => (
  <div className={styles.root}>
    <div>
      {arrows && <Controls position={position} total={total} handleClick={handleClick} />}
      <div>{children}</div>
    </div>
  </div>
);
