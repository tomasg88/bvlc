import PropTypes from "prop-types";

export const sanityImagePropType = PropTypes.shape({
    _type: PropTypes.string.isRequired,
    _asset: PropTypes.shape({
        _ref: PropTypes.string.isRequired,
        _type: PropTypes.string.isRequired,
    }),
});
