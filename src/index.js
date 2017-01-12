import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'preact-tap-event-plugin';
import Root from 'src/containers/Root';
import 'normalize.css';

require('offline-plugin/runtime').install();
injectTapEventPlugin();

render(<Root />, document.getElementById('app'));
