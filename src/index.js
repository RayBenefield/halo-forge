import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'normalize.css';
import 'src/index.html';
import 'src/index.css';
import Root from 'src/containers/Root';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<Root />, document.getElementById('app'));
