import React from "react";
import { Route } from 'react-router-dom';
import Buy from "./Buy/Buy";
import Stock from "./components/Stock";
import BuyHeader from "./Buy/BuyHeader";

export default props =>
    <>
        <Route path="/account"><h1>Account</h1></Route>
        <Route path="/stock"><Stock {...props}/></Route>
        <Route path="/buy/:code"><Buy code="AAPL" content={<BuyHeader name="Apple"/>} {...props}/></Route>
    </>