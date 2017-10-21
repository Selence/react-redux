import React from 'react';
import {connect} from 'react-redux'
import { CounterFieldComponent } from '../components/CounterFieldComponent'

/**
 * @param {Object} state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return {
        counter: state.counter.value || 0
    }
};

export default connect(mapStateToProps)(CounterFieldComponent)
