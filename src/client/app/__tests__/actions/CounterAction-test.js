import React from 'react';
import { increaseCounter } from '../../actions/CounterAction';

jest.mock(
    '../../actions/CounterAction',
    () => ({
        INCREASE_COUNTER: 'INCREASE_COUNTER_MOCK'
    })
);

describe.skip('CounterAction', () => {
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
                givenAction.counter = 3;
                expect(increaseCounter(currentState, givenAction)).toEqual(0);
            });
        })
    })
});