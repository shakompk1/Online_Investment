import React from "react";
import {Route} from 'react-router-dom';
import Stock from './components/Stock.jsx'

export default () =>
    <>
        <Route path="/account"><h1>Account</h1></Route>
        <Route path="/stock"><Stock /></Route>
    </>