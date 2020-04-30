import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #FFDC40;
    font-size: 22px;
    font-weight: bold;
    background: #833AE0;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 67px;
`;

const Name = styled.div`
     margin-left: 66px;
     display: flex;
     align-items: center;
`;

const Amount = styled.div`
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Balance extends Component {
    render() {
        return <Footer>
            <Name>Balance:</Name>
            <Amount>{this.props.amount} $</Amount>
        </Footer>
    }
}

export default Balance;