import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import api from '../api'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware),
        //applyMiddleware(thunk, api)
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}