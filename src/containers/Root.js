import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'src/configureStore';
import Layout from 'src/containers/Layout';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <Layout />
    </Provider>
);
