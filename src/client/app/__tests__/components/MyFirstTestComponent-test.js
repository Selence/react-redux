import React from 'react';
import renderer from 'react-test-renderer';
import { MyFirstTestComponent } from '../../components/CounterFieldComponent'

describe('MyFirstTestComponent', () => {
    const renderComponent = () => (
        renderer.create(<MyFirstTestComponent />).toJSON()
    );

    describe('when the component is called', () => {
        it('renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});