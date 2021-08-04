// import './KhomePage.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

const KhomePage = props => {
    console.log( props );

    /*iKsimple version */
    return (
        <div>
            <h1>iK KhomePage working</h1>
            <Link to='/login'>to login page</Link>
        </div>
    ); /*END return */

}; /*END KhomePage component */

export default KhomePage;