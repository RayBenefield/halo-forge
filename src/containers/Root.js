import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <AsyncApp />
        </MuiThemeProvider>
    </Provider>
);
