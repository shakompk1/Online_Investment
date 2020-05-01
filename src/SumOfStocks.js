import React, { Component } from 'react';
import styled from "styled-components";
import { getUserData } from './data.js';

export const PriceP = styled.p`
font-family: Roboto;
font-size: 64px;
text-align: right;
color: #000000`

export const PriceSpan = styled.span`
font-size: 24px`

export default class SumOfStocksEl extends Component {

    state = {
        sum: 0
    }

    getSum() {
        let sum = 0;
        getUserData()
            .then(res => {
                res[1].forEach((item) => {
                        sum += item.purchasePrice;
                })
                this.setState({sum: sum});
            });
    }

    componentDidMount() {
        this.getSum()
    }

    render() {
        let {sum} = this.state;
        return (
            <PriceP>{Math.trunc(sum)}.
                <PriceSpan> {Math.trunc((sum % 1).toFixed(2) * 100)} $ </PriceSpan>
            </PriceP>
        )

    }
}