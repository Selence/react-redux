import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Number} counter
 * @returns {XML}
 */
export const CounterFieldComponent = ({
    counter
}) => {

    const renderHint = () => (
        <div className="hint">
            <p className="hint__text">Download <a href="https://github.com/zalmoxisus/redux-devtools-extension">redux-devtools-extension</a> to show the store</p>
        </div>
    );

    return (
        <div>
            <p>Counter:</p>
            <div className="counter__field">{counter}</div>
            {counter > 1 && renderHint()}
        </div>
    );
};

CounterFieldComponent.propTypes = {
    counter: PropTypes.number
};
