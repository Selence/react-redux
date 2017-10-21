import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import { increaseCounter } from '../actions/CounterAction';
import { CounterButtonComponent } from '../components/CounterButtonComponent'

/**
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({ increaseCounter }, dispatch)}
};

export default connect(null, mapDispatchToProps)(CounterButtonComponent)
