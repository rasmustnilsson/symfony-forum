import * as React from 'react';
import { render } from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

fetch('/isAuthenticated')
.then(response => response.json())
    .catch(err => {
        console.log(err)
    })
    .then(data => {
        render(
        <Provider store={store}>
            <App auth={data} />
        </Provider>, document.getElementById('app'));
    })