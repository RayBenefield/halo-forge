import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import configureStore from '../configureStore';
import Layout from './Layout';

const store = configureStore();
darkBaseTheme.palette.canvasColor = '#424242';

export default () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Layout />
        </MuiThemeProvider>
    </Provider>
);
