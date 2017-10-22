import React from 'react';
import renderer from 'react-test-renderer';
import { CounterFieldComponent } from '../../components/CounterFieldComponent'

describe('Component CounterField', () => {
    let componentData;

    const renderComponent = () => (
        renderer.create(<CounterFieldComponent {...componentData}/>).toJSON()
    );

    beforeEach(() => {
        componentData = {
            counter: 1
        };
    });

    describe('when the component is called with the initial counter state (1)', () => {
        it('renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('when the component is called with an update counter state (5)', () => {
        beforeEach(() => {
            componentData.counter = 5;
        });

        it('renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});