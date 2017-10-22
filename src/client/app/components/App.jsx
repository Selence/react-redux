import React, { Component } from 'react';
import CounterFieldContainer from '../container/CounterFieldContainer';
import CounterButtonContainer from '../container/CounterButtonContainer';

/**
 * @returns {XML}
 */
export class App extends Component {
    constructor(props) {
        super(props);

        this.renderCounterContainer = this.renderCounterContainer();
    }

    renderCounterContainer() {
        return (
            <div className="counter">
                <CounterButtonContainer />
                <CounterFieldContainer />
            </div>
        )
    };

    /**
     * @returns {XML}
     */
    render () {
        return (
            <div className="app">
                <p className="app__text">If you see this, it seems to be working</p>
                {this.renderCounterContainer}
            </div>
        );
    }
}