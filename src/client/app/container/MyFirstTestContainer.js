import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import { MyFirstTestComponent } from '../components/MyFirstTestComponent'

/**
 * @param {Object} state
 * @returns {Object}
 */
const mapStateToProps = (state) => {
    return {...state}
};

/**
 * @param {Function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(() => {}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFirstTestComponent)
