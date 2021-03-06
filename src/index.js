/* eslint-disable import/no-duplicates */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'preact-tap-event-plugin';
import Root from 'src/containers/Root';
import 'normalize.css';

require('offline-plugin/runtime').install();
require('preact/devtools');

injectTapEventPlugin();

render(<Root />, document.getElementById('app'));
