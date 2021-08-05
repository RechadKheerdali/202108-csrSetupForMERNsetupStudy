// import './Klogout.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

const Klogout = () => {
    // console.log( props );
    const iKsubmit = (event) => {
        event.preventDefault()
        console.log('Klogout submit')
    }

    return (
        <div>
            <h1>iK Klogout working</h1>
            <form onSubmit={iKsubmit}>
                <input type='email' name='email' />
                <input type='password' name='password' />
                <button type='submit'>iK submit</button>
            </form>
        </div>
    ); /*END return */

}; /*END Klogout component */

export default Klogout;