import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'src/configureStore';
import Layout from 'src/containers/Layout';
import { setupFirebase } from 'src/epics/firebase';

const store = configureStore();
setupFirebase(store);

export default () => (
    <Provider store={store}>
        <Layout />
    </Provider>
);
