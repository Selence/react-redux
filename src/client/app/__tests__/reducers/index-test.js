import React from 'react';
import Redux from 'redux';
import renderer from 'react-test-renderer';
import Reducers from '../../reducers/index'

const mockRedux = Redux;
jest.mock(
    'redux',
    () => ({
        ...mockRedux,
        combineReducers: (props) => (JSON.stringify(props))
    })
);

jest.mock(
    '../../reducers/CounterReducer',
    () => ({
        counter: {type: 'ACTION_COUNTER'}
    })
);

describe('Reducers Index', () => {
    const renderComponent = () => (
        renderer.create(<Reducers />).toJSON()
    );

    describe('when the reducers are called', () => {
        it('they renders correctly', () => {
            expect(renderComponent()).toMatchSnapshot();
        });
    })
});
