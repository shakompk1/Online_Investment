import React, { Component } from 'react';
import styled from "styled-components";

const Cont = styled.div`
display: flex;
align-items: center;
font-family: Roboto;
color: #833AE0;
`

const InputButton = styled.button`
display: block;
border: none;
background-color: white;
width: 50px;
height: 50px;
margin: 0 10px;

font-weight: 200;
font-size: 36px;
line-height: 14px;
text-align: center;
color: #833AE0;
`

const InputP = styled.input`
display: block;
border: none;
background-color: white;
width: 80px;
text-align: center;

font-family: Roboto;
font-size: 64px;
color: #833AE0;`


export default class Counter extends Component {

    state = {
        value: 0
    }

    plus = () => {
        let { value } = this.state;
        this.setState({ value: value + 1 })
    }

    minus = () => {
        let { value } = this.state;
        if (value > 0) {
            this.setState({ value: value - 1 })
        }
    }

    changeAmountHandler = () => {
        let { value } = this.state;
        console.log(value);
    }

    render() {
        let { value } = this.state;

        return (
            <Cont>
                <InputButton onClick={this.minus} > - </InputButton>
                <InputP value={value} />
                <InputButton onClick={this.plus} > + </InputButton>
            </Cont>
        )
    }
}