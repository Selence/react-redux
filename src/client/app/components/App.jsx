import React, { Component } from 'react';
import { MyFirstTestComponent } from './MyFirstTestComponent';

/**
 * @returns {XML}
 */
export class App extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * @returns {XML}
     */
    render () {
        return (
            <div>
                <p>Hello React Project ... can you load ... ?</p>
                <MyFirstTestComponent />
            </div>
        );
    }
}