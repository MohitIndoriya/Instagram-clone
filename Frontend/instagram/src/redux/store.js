import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from "./reducers/auth.reducer"
import { postReducer } from './reducers/post.reducer';

let root = combineReducers({
    auth: authReducer,
    post: postReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);