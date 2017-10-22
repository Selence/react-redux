import React from 'react';
import {counter} from '../../reducers/CounterReducer';

jest.mock(
    '../../actions/CounterAction',
    () => ({
        INCREASE_COUNTER: 'INCREASE_COUNTER_MOCK'
    })
);

describe('Action Counter', () => {
    let currentState,
        givenAction;

    beforeEach(() => {
        currentState = {};
    });

    describe('when the action is called', () => {
        describe('with a fully filled store', () => {
            describe('and a new counter value is given with the correct action type', () => {
                beforeEach(() => {
                    Object.defineProperty(currentState, 'value', {
                        writable: false,
                        value: 3
                    });

                    givenAction = {
                        type: 'INCREASE_COUNTER_MOCK'
                    }
                });

                it('it returns the old state plus the new state', () => {
                    givenAction.value = 5;
                    expect(counter(currentState, givenAction)).toEqual({value: 8});
                });
            });

            describe('and a new counter value is given with an unknown action type', () => {
                beforeEach(() => {
                    Object.defineProperty(currentState, 'value', {
                        writable: false,
                        value: 3
                    });

                    givenAction = {
                        type: 'INCREASE'
                    }
                });

                it('it returns the given state', () => {
                    givenAction.value = 5;
                    expect(counter(currentState, givenAction)).toEqual(currentState);
                });
            });
        });

        describe('with an empty store', () => {
            describe('and a new counter value is given', () => {
                beforeEach(() => {
                    currentState = undefined;

                    givenAction = {
                        type: 'INCREASE_COUNTER_MOCK'
                    }
                });

                it('it returns the default state (1) plus the given one (3)', () => {
                    givenAction.value = 3;
                    expect(counter(currentState, givenAction)).toEqual({value: 4});
                });
            });
        });
    });
});
