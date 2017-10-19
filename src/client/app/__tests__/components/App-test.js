import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../../components/App'

describe('App', () => {
    const renderComponent = () => (
        renderer.create(<App />).toJSON()
    );

    describe('when the component is called', () => {
        it('renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});