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

const KhomePage = () => {
    // console.log( props );

    return (
        <div>
            <h1>iK KhomePage working</h1>
            <Link to='/signup'>to signup page</Link>
            <Link to='/login'>to login page</Link>
            <Link to='/logout'>to logout page</Link>
            <Link to='/authpage'>to authpage page</Link>
            <Link to='/googlepage'>to authpage page</Link>
        </div>
    ); /*END return */
}; /*END KhomePage component */

export default KhomePage;