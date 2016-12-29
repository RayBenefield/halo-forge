import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './index.html';

render(<Root />, document.getElementById('app'));
