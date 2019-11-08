import { INCREMENT, DECREMENT } from './constants';

export const setNumberIncrease = (num) => ({
    type: INCREMENT
})


export const setNumberDecrease = (num) => ({
    type: DECREMENT
})