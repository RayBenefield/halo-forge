import React from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => (
    <div>
        <p>Hello world from React.</p>
    </div>
);

render(<App />, document.getElementById('app'));
