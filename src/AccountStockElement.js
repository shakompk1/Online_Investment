import React, { Component } from 'react';
import styled from "styled-components";

const StockSection = styled.div`
width: 759px;
height: 84px;
display: flex;
vertical-align: center;
justify-content: space-between;`

const CodeP = styled.p`
font-family: Space Mono;
font-size: 12px;
line-height: 10px;
padding: 0px 20px;
/* identical to box height, or 83% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);`

const NameP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
padding: 0px 20px;
/* identical to box height, or 82% */

display: flex;
align-items: center;

color: #000000;`

const PcsP = styled.p`
font-family: Space Mono;
font-size: 12px;
line-height: 10px;
/* identical to box height, or 83% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.5);`

const PriceP = styled.p`
font-family: Roboto;
font-size: 22px;
line-height: 18px;
/* identical to box height, or 82% */

display: flex;
align-items: center;
text-align: right;

color: #000000;`

const Green = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;
/* identical to box height, or 56% */

display: flex;
align-items: center;

color: #2FC20A;
`

const Red = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;

display: flex;
align-items: center;

color: #FF2C2C;`

export default class AccountStock extends Component {

    defaultProps = {
        Stockcode: 'N/A',
        StockName: 'N/A',
        StockPcs: 'N/A',
        StockPrice: 'N/A',
        StockChange: 'N/A',
        StockChangeRate: 'N/A'
    }

    render() {
        let Stockcode = 'NKE';
        let StockName = 'Nike Inc.';
        let StockPcs = '5 pcs';
        let StockPrice = 12454.00;
        let StockChange = -1.9;
        let StockChangeRate = (StockChange * 100 / StockPrice).toFixed(2);

        return (
            <StockSection>
                <CodeP> {Stockcode} </CodeP>
                <NameP > {StockName} </NameP>
                <PcsP> {StockPcs} </PcsP>
                <PriceP> {StockPrice} $ </PriceP>
                {
                    (StockChange > 0) ?
                        (<Green> ⯅ +{StockChange}$ (+{StockChangeRate}%) </Green>) :
                        (<Red> ⯆ {StockChange}$ ({StockChangeRate}%) </Red>)
                }
            </StockSection>
        )
    }
}