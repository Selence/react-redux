import {
    INCREASE_COUNTER
} from '../actions/CounterAction';

export const counterIncrease = (state = {counter: 1}, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + action.counter
            };

        default:
            return state;
    }
};