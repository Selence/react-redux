import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {XML}
 */
export const MyFirstTestComponent = ({
    counter
}) => {
    return (
        <div>
            uh...Yes I can!
        </div>
    );
};

MyFirstTestComponent.propTypes = {
    counter: PropTypes.number
};
