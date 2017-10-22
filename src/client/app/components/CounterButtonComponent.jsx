import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} actions
 * @returns {XML}
 */
export const CounterButtonComponent = ({actions}) => {

    const { increaseCounter } = actions;

    return (
        <div
            className="counter__button"
            onClick={increaseCounter}>
            Increase Counter +1
        </div>
    )

};

CounterButtonComponent.propTypes = {
    actions: PropTypes.shape({
        increaseCounter: PropTypes.func
    })
};

