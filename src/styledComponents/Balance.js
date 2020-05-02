import React from 'react';
import {Amount, Footer, Name} from "./stockStyleComp";

export default props => <Footer>
                            <Name>Balance:</Name>
                            <Amount>{props.amount} $</Amount>
                        </Footer>