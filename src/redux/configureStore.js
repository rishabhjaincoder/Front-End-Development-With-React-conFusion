import { createStore } from 'redux';
import { Reducer, initialState } from './reducer'

// this function is used to create the store
export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState);
    return store;
}