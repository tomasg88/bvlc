import React, { FunctionComponent, ReactElement, useMemo } from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import PropTypes from "prop-types";

interface IProps {
    className: string;
    rrss: string;
    url: string;
}

const RrssIcon: FunctionComponent<IProps> = ({
    className,
    rrss,
    url,
}): ReactElement => {
    const getIconComponent = useMemo(() => {
        switch (rrss) {
            case "Facebook":
                return <AiOutlineFacebook />;
            case "Instagram":
                return <AiOutlineInstagram />;
            case "Twitter":
                return <AiOutlineTwitter />;
            case "Youtube":
                return <AiOutlineYoutube />;
        }
    }, [rrss]);

    return (
        <a
            target="_blank"
            className={className}
            href={url}
            aria-label={rrss}
            title="visitar red social"
            rel="noopener noreferrer"
        >
            {getIconComponent}
            <span className="sr-only">{rrss}</span>
        </a>
    );
};

RrssIcon.defaultProps = {
    className: "",
};

RrssIcon.propTypes = {
    className: PropTypes.string,
    rrss: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default RrssIcon;