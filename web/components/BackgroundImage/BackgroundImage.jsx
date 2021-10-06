import Image from 'next/image';
import PropTypes from 'prop-types';

function BackgroundImage({ title, image, opacity }) {
    const opacityClass = opacity ? `opacity-${opacity}` : '';

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
}

BackgroundImage.defaultProps = {
    opacity: 100,
    title: '',
};

BackgroundImage.propTypes = {
    opacity: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default BackgroundImage;
