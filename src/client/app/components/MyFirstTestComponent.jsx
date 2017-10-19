import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {XML}
 */
export const MyFirstTestComponent = ({
    counter
}) => {
    return (
        <divs>
            uh...Yes I can!
        </divs>
    );
};

MyFirstTestComponent.propTypes = {
  counter: PropTypes.number
};
