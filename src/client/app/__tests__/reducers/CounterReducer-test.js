import React from 'react';
import { counterIncrease } from '../../reducers/CounterReducer';


jest.mock(
    '../../actions/CounterAction',
    () => ({
        INCREASE_COUNTER: 'INCREASE_COUNTER_MOCK'
    })
);

describe('CounterAction', () => {
    let currentState = {},
        givenAction;

    describe('when the the action is called', () => {
        describe('and a new counter is set', () => {
            beforeEach(() => {
                Object.defineProperty(currentState, 'counter', {
                    writable: false,
                    value: 3
                });

                givenAction = {
                    type: 'INCREASE_COUNTER_MOCK'
                }
            });

            it('returns the new state', () => {
                givenAction.counter = 5;
                expect(counterIncrease(currentState, givenAction)).toEqual({counter: 8});
            });
        })
    })
});