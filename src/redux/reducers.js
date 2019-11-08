import { INCREMENT, DECREMENT } from './constants';

const initialState = {
    number: 0
};

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case INCREMENT:
            return {number : state.number + 1};
        case DECREMENT:
            return {number : state.number - 1};
        default:
            return state;
    }
}