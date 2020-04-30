import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.p`
    display: flex;
    color: #FFDC40;
    font-size: 22px;
    font-weight: bold;
    background: #833AE0;
`;

const Balance1 = styled.p`
     margin: 50px 27% 0 10%;
`;

const Balance2 = styled.p`
    font-size: 36px;
`;

class Balance extends Component {
    render() {
        return <Footer>
            <Balance1>Balance</Balance1>
            <Balance2>{this.props.amount} $</Balance2>
        </Footer>
    }
}

export default Balance;