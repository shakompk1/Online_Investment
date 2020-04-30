import React, { Component } from 'react';
import styled from "styled-components";

const Cont = styled.div`
display: flex;
vertical-align: center;
text-align: center;
font-family: Roboto;
color: #833AE0;
`

const InputButton = styled.button `
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

const InputP = styled.p `

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 64px;

text-align: center;

color: #833AE0;`


export default class Counter extends Component {
    state = {
        count: 0
    }

    plus = () => {
        if (this.state.count >= 0 && this.state.count < 20) {
            this.setState({ count: this.state.count + 1 })
        }
    }

    minus = () => {
        if (this.state.count > 0 && this.state.count <= 20) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <Cont>
                <InputButton onClick={this.minus} > -
            </InputButton>
                <InputP> {this.state.count} </InputP>
                <InputButton onClick={this.plus} > +
            </InputButton>
            </Cont>
        )
    }
}