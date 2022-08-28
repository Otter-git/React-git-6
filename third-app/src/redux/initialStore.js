import {applyMiddleware, combineReducers, createStore} from "redux";
import { chatReducer } from "./chatReducer/chatReducer";
import { messageReducer } from "./messageReducer/messageReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';


const persistConfig = {
    key: 'root',
    storage
};

const logger = createLogger({
    duration: true,
});

const interval = store => next => action => {
    const delay = action?.meta?.delay;
    if(!delay) {
        return next(action)
    }

    const timeout = setTimeout(() => next(action), delay);

    return () => {
        clearTimeout(timeout)
    }
};

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(interval, logger));

export const persist = persistStore(store);