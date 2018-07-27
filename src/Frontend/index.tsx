import * as React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar'
import FrontPageCatagories from './components/FrontPageCategories'

fetch('/isAuthenticated')
    .then(response => response.json())
    .then(data => {
        render(<Navbar auth={data} />,document.getElementById('navbar'));
        render(<FrontPageCatagories auth={data} />,document.getElementById('categories'));
    })