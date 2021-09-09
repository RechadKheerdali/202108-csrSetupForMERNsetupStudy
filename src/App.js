// import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

import KhomePage from './components/KhomePage.js'
import KsignUp from './components/KsignUp'
import Klogin from './components/Klogin.js'
import Klogout from './components/Klogout.js'
import KauthPage from './components/KauthPage.js'
import KgooglePage from './components/KgooglePage.js'
import Kform from './components/Kform.js'

const App = () => {
    //  console.log( props );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={KhomePage} />
                <Route path="/signup" exact component={KsignUp} />
                <Route path="/login" exact component={Klogin} />
                <Route path="/logout" exact component={Klogout} />
                <Route path="/authpage" exact component={KauthPage} />
                <Route path="/googlepage" exact component={KgooglePage} />
                <Route path="/form" exact component={Kform} />
                <Route render={() => <div>iK error page</div>} />
            </Switch>
        </BrowserRouter>
    ); /*END return */
}; /*END App component*/


// /*iK simple App setup */
// const App = props => {
//   // console.log( props );

//     return (
//         <div>
//             iK App working
//         </div>
//     ); /*END return */
// }; /*END App component*/


// const mapStateToProps = (iKstateP, iKownPropsP) => {
    // return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
    // return {
    //     iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
    // };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (App);


// App.propTypes = {
    // kProps1: PropTypes.number,
    // kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END App.propTypes */

// App.defaultProps = {
    // kProps1: 23,
    // kProps2: ["iKdefaultValue2"]
// }; /*END App.defaultProps */


export default App;