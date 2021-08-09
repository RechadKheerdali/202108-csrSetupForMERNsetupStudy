// import './KauthPage.css';
import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
import axios from 'axios';
// import DOMPurify from 'dompurify';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

const KauthPage = () => {
    // console.log( props );
    useEffect(() => {
        axios.get('http://localhost:4000/api/authpage')
            .then(iKresponse => {
                console.log(iKresponse)
            })
            .catch(err => {
                console.log(err)
            })
    });

    return (
        <div>
            <h1>iK KauthPage working</h1>
            <p>You have to be authenticated to see this page</p>
        </div>
    ); /*END return */
}; /*END KauthPage component */

export default KauthPage;