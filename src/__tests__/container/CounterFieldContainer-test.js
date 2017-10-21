import React from 'react';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import CounterFieldContainer from '../../client/app/container/CounterFieldContainer';

jest.mock(
    '../../client/app/components/CounterFieldComponent',
    () => ({
        CounterFieldComponent: (props) => (<div className="CounterFieldComponent" {...props} />)
    })
);

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Container CounterField', () => {
    let fakeStore = {};

    const renderComponent = () => (
        renderer.create(
            <Provider store={mockStore(fakeStore)}>
                <CounterFieldContainer />
            </Provider>
        )
    );

    describe('when the container is called', () => {
        beforeEach(() => {
            fakeStore = {
                counter: {}
            }
        });

        describe('with a counter value', () => {
            beforeEach(() => {
                fakeStore.counter.valueOf = 5;
            });

            it('the props are parsed to the component', () => {
                expect(renderComponent()).toMatchSnapshot();
            });
        });

        describe('with no counter value', () => {
            it('the default props are parsed to the component', () => {
                expect(renderComponent()).toMatchSnapshot();
            });
        });
    })
});
