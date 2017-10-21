import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../../client/app/components/App'

jest.mock(
    '../../client/app/container/CounterFieldContainer',
    () => () => <div className="CounterFieldContainer" />
);

jest.mock(
    '../../client/app/container/CounterButtonContainer',
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