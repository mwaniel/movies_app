import {configureStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composerWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducer';

const middleware = [thunk];
const initialState = {};
 
const store = configureStore(rootReducer,initialState,composerWithDevTools
    (applyMiddleware(...middleware)));

export default store;