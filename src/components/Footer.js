import React from 'react';
import {Amount, Footer, Name} from "../styledComponents/componentsStyle";

export default props => <Footer>
                            <Name>Balance:</Name>
                            <Amount>{props.amount} $</Amount>
                        </Footer>