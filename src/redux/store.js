import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './userDuck';
import charsReducer, { getCharactersAction } from './charsDuck';
import thunk from 'redux-thunk';

// realiza una combinación de todos los reducers (es un consolidado)
let rootReducer = combineReducers({
    user: userReducer,
    characters: charsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore () {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    getCharactersAction()(store.dispatch, store.getState);
    return store;
}