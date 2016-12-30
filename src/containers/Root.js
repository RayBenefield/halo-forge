import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AsyncApp />
        </MuiThemeProvider>
    </Provider>
);
