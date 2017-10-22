import React from 'react';
import { increaseCounter } from '../../actions/CounterAction';

describe('Counter Action', () => {
    describe('when the action is called', () => {
        it('it returns the new state', () => {
            expect(
                increaseCounter()
            ).toEqual(
                {type: 'INCREASE_COUNTER', value: 1}
            );
        });
    })
});