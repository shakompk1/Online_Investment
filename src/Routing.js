import React from "react";
import {Route} from 'react-router-dom';

export default () =>
    <>
        <Route path="/account"><h1>Account</h1></Route>
        <Route path="/stock"><h1>Stock</h1></Route>
    </>