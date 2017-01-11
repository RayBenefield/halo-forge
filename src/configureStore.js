import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';
import rootReducer from 'src/reducers';
import postEpic from 'src/epics';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

const epicMiddleware = createEpicMiddleware(postEpic);

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(
            epicMiddleware,
            loggerMiddleware
        )),
    );

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            // eslint-disable-next-line global-require,import/newline-after-import
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
