import {
    INCREASE_COUNTER
} from '../actions/CounterAction';

export const counter = (state = {value: 1}, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                value: state.value + action.value
            };

        default:
            return state;
    }
};