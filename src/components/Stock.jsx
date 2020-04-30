import React, { Component } from 'react';
import styled from 'styled-components'
const StockContainer = styled.div`
    width: 760px;
    margin: 0 auto;
`;

class Stock extends Component {
    state = {
        data: [],
        offset: 0,
        limit: 20,
        pages: 5
    }

    dataFromApi = () => {
        fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
            .then(result => result.json())
            .then(data => {
                let count = Math.ceil(data.symbolsList.length / this.state.limit);
                this.setState({
                    data: data.symbolsList,
                    pages: count
                })
            });
    }

    componentDidMount() {
        this.dataFromApi();
        console.log('Start')
    }

    render() {

        const rows = this.state.data.slice(this.state.offset, this.state.offset + this.state.limit)
            .map(item => (<tr key={item.symbol}><td>{item.symbol}</td><td>{item.name}</td><td>{item.price}</td></tr>));

        return (
            <StockContainer>
            </StockContainer>
        );
    }
}


export default Stock;