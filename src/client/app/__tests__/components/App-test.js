import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../../components/App'

jest.mock(
    '../../container/CounterFieldContainer',
    () => () => <div className="CounterFieldContainer" />
);

jest.mock(
    '../../container/CounterButtonContainer',
    () => () => <div className="CounterButtonContainer" />
);

describe('Component App', () => {
    const renderComponent = () => (
        renderer.create(<App />).toJSON()
    );

    describe('when the component is called', () => {
        it('it renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});