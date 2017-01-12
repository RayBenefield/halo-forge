import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'preact-tap-event-plugin';
import Root from 'src/containers/Root';
import 'normalize.css';

injectTapEventPlugin();

render(<Root />, document.getElementById('app'));
