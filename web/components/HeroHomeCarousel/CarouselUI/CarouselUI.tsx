import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import styles from './CarouselUI.module.scss';

interface CarouselUIProps {
  children: ReactNode;
  position: number;
  total: string[];
  handleClick: () => void;
  arrows: boolean;
}

const CarouselUI: FunctionComponent<CarouselUIProps> = ({
  position,
  total,
  handleClick,
  children,
  arrows,
}): ReactElement => {
  function renderControls() {
    return (
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
  }

  return (
    <div className={styles.root}>
      <div>
        {arrows && renderControls()}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CarouselUI;
