import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import CounterButtonContainer from '../../client/app/container/CounterButtonContainer';

jest.mock(
    '../../client/app/components/CounterButtonComponent',
    () => ({
        CounterButtonComponent: (props) => (<div className="CounterButtonComponent" {...props} />)
    })
);

const mockActionIncreaseCounter = jest.fn();
jest.mock(
    '../../client/app/actions/CounterAction',
    () => ({
        increaseCounter: () => {
            mockActionIncreaseCounter();
            return {type: 'ACTION_MOCK'}
        }
    })
);

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Container CounterButton', () => {
    let fakeStore = {};

    const mountComponent = () => (
        mount(<Provider store={mockStore(fakeStore)}>
                <CounterButtonContainer />
            </Provider>
        ).find('CounterButtonComponent')
    );

    describe('when the container is called', () => {
        beforeEach(() => {
            mountComponent().props().actions.increaseCounter();
        });

        it('the increaseCounter action is callable', () => {
            expect(mockActionIncreaseCounter).toHaveBeenCalled()
        });
    })
});
