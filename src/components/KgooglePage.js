// import './KgooglePage.css';
import React from 'react';
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

const KgooglePage = () => {
    // console.log( props );
    const iKsubmit = (event) => {
        event.preventDefault()
        /*You would use these dom values to pass onto axios */
        // console.log( iKemailDom.value )
        // console.log( iKpasswordDom.value )

        console.log(11166)

        axios.get(
            'http://localhost:4000/api/google'
            // , {email: 'zidane@gmail.com', password: 'zidanePassword'} //using pre-set values to save time otherwise use form dom values
        )
            .then(iKresponse => {
                console.log(222666)
                console.log(iKresponse)
                // console.log(document.cookie)
            })
            .catch(err => {
                console.log(333666)
                console.log(err)
            })
    }

    return (
        <div>
            <h1>iK KgooglePage working</h1>
            <form onSubmit={iKsubmit}>
                <input 
                    type='email' 
                    name='email' 
                    // ref={emailP => { iKsetEmailDom(emailP) }} 
                />
                <input 
                    type='password' 
                    name='password' 
                    // ref={passwordP => { iKsetPasswordDom(passwordP) }} 
                />
                <button type='submit'>iK submit</button>
            </form>
        </div>
    ); /*END return */

}; /*END KgooglePage component */

export default KgooglePage;