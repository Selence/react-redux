import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {CounterButtonComponent} from '../../components/CounterButtonComponent';

describe('Component CounterButton', () => {
    let componentData,
        counterActionSpy;

    const renderComponent = () => (
        renderer.create(<CounterButtonComponent {...componentData}/>).toJSON()
    );

    const mountComponent = () => (
        mount(<CounterButtonComponent {...componentData}/>)
    );

    describe('when the component is rendered', () => {
        beforeEach(() => {
            counterActionSpy = jest.fn();

            componentData = {
                actions: {
                    increaseCounter: counterActionSpy
                }
            };
        });

        it('it math to snapshot', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('when the component is mounted', () => {
        let _component;

        beforeEach(() => {
            counterActionSpy = jest.fn();

            componentData = {
                actions: {
                    increaseCounter: counterActionSpy
                }
            };
        });

        describe('and the user has clicked the element to increase the counter', () => {
            beforeEach(() => {
                _component = mountComponent();
                _component.find('div').first().simulate('click');
            });

            it('the increaseCounter Action is called', () => {
                expect(counterActionSpy).toHaveBeenCalled();
            });
        })
    });
});