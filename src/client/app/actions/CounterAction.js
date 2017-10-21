export const INCREASE_COUNTER = 'INCREASE_COUNTER';

export const increaseCounter = (counter) => ({
    type: INCREASE_COUNTER,
    counter
});
