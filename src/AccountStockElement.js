import React, {Component} from 'react';
import styled from "styled-components";

export const StockSection = styled.div`
width: 759px;
height: 85px;
display: flex;
justify-content: space-between;

&:hover {
    background: rgba(131, 58, 224, 0.05);
    cursor: pointer;
  }
`

export const Cont = styled.div`
display: flex
`

export const SmallText = styled.p`
font-family: Space Mono;
font-size: 12px;
padding: 0px 10px;
width: 80px;

display: flex;
align-items: center;

margin: 0;  
color: rgba(0, 0, 0, 0.5)`

export const NameP = styled.p`
font-family: Roboto;
font-size: 22px;
// width: 300px;
margin: 0;

display: flex;
align-items: center;

color: #000000`

export const PriceP = styled.p`
font-family: Roboto;
font-size: 30px;
margin: 0;

display: flex;
align-items: center;
text-align: right;
padding-right: 35px;
color: #000000`

export const PriceSpan = styled.span`
font-size: 16px`

const Green = styled.p`
font-family: Roboto;
font-size: 18px;

display: flex;
margin: 0;
align-items: center;

color: #2FC20A`

const Red = styled.p`
font-family: Roboto;
font-size: 18px;
line-height: 10px;

display: flex;
align-items: center;

color: #FF2C2C`

export default class AccountStock extends Component {

    static defaultProps = {
        symbol: 'N/A',
        name: 'N/A',
        amount: 'N/A',
        price: 44.4,
        StockChange: 'N/A',
        StockChangeRate: 'N/A'
    }

    render() {
        const {code, companyName, price, amount, priceDifference, differenceRate} = this.props;
        return (
            <StockSection>
                <Cont>
                    <SmallText> {code} </SmallText>
                    <NameP> {companyName} </NameP>
                    <SmallText> {amount} pcs </SmallText>
                </Cont>

                <PriceP>{Math.trunc(price)}. <PriceSpan> {(price % 1).toFixed(2) * 100} $ </PriceSpan></PriceP>
                {
                    (priceDifference > 0) ?
                        (<Green> ⯅ +{priceDifference}$ (+{differenceRate}%) </Green>) :
                        (<Red> ⯆ {priceDifference}$ ({differenceRate}%) </Red>)
                }
            </StockSection>
        )
    }
}

export {Green, Red}