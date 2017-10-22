/* global document */
import 'babel-polyfill';

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { store } from './store/ReduxStore'
import '../styles/main.scss';
import { App } from './components/App';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
