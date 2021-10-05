import Image from "next/image";
import PropTypes from "prop-types";
import { FunctionComponent, ReactElement } from "react";

interface IProps {
    title: string;
    image: string;
    opacity: number;
}

const BackgroundImage: FunctionComponent<IProps> = ({
    title,
    image,
    opacity,
}): ReactElement => {
    const opacityClass = opacity ? `opacity-${opacity}` : "";

    return (
        <div className={`absolute inset-0 z-0 ${opacityClass}`}>
            <Image
                layout="fill"
                className="object-cover w-full h-screen"
                src={image}
                title={title}
            />
        </div>
    );
};

BackgroundImage.defaultProps = {
    opacity: 100,
    title: "",
};

BackgroundImage.propTypes = {
    opacity: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default BackgroundImage;
