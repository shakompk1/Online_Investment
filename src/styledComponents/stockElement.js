import React from 'react';
import { StockListItem, SmallText, NameP} from './stockStyleComp';
import Price from "./Price";

export default props => {
        const { symbol, name, price } = props;
        return <StockListItem>
                        <SmallText> {symbol} </SmallText>
                        <NameP> {name} </NameP>
                        <Price price={price} />
                </StockListItem>
}