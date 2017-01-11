import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { resizeLayout } from 'src/actions';
import configureStore from 'src/configureStore';
import Layout from 'src/containers/Layout';

const store = configureStore();

const customDarkTheme = getMuiTheme(darkBaseTheme);
customDarkTheme.textField.backgroundColor = '#424242';
customDarkTheme.paper.backgroundColor = '#424242';
customDarkTheme.appBar.color = '#212121';
customDarkTheme.appBar.textColor = '#FFFFFF';

window.addEventListener('resize', () => store.dispatch(resizeLayout()));
store.dispatch(resizeLayout());

export default () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={customDarkTheme}>
            <Layout />
        </MuiThemeProvider>
    </Provider>
);
