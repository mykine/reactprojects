import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import CommentApp from "./CommentApp";

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
)