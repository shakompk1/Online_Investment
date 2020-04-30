import React from 'react';
import styled from "styled-components";

const Cont = styled.div`
    display: flex;
    vertical-align: center;
    text-align: center;
    align-items: center;
    font-family: Roboto;
    color: #833AE0;
`;

const InputButton = styled.button`
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
    cursor: pointer;
`;

const InputP = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    text-align: center;
    color: #833AE0;
`;


export default props => {
        const {add, sub, value} = props;
        return <Cont>
                <InputButton onClick={sub}> - </InputButton>
                <InputP> {value} </InputP>
                <InputButton onClick={add}> + </InputButton>
        </Cont>
}