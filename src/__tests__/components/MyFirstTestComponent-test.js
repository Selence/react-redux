import React from 'react';
import renderer from 'react-test-renderer';
import { CounterFieldComponent } from '../../client/app/components/CounterFieldComponent'

describe('Component CounterField', () => {
    const renderComponent = () => (
        renderer.create(<CounterFieldComponent />).toJSON()
    );

    describe('when the component is called', () => {
        it('renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});