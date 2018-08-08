import * as React from 'react';
import { render } from 'react-dom';
import App from './App'

fetch('/isAuthenticated')
.then(response => response.json())
    .catch(err => {
        console.log(err)
    })
    .then(data => {
        render(<App auth={data} />, document.getElementById('app'));
    })