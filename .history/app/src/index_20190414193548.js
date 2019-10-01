import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const App = <Routes />;

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
