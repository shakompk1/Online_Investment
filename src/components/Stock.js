import React, { Component } from 'react';
import { Pagination } from "antd";
import StockElement from '../styledComponents/stockElement';
import Search from '../styledComponents/Search.js';
import { ListContainer, NotFnd, BorderDiv, StockContainer, AlignCenterDiv, AlignPaginator } from '../styledComponents/componentsStyle.js'
import { NavLink } from "react-router-dom";
import { getStocks } from "../data";
import Loading from './Loading/Loading';

class Stock extends Component {
    state = {
        data: [],
        offset: 0,
        limit: 20,
        loading: true,
        keyword: '',
    }

    componentDidMount() {
        getStocks()
            .then(data => { this.setState({ data }) })
            .catch(console.log)
            .finally(() => this.setState({ loading: false }))
    }

    onChangeHnd = e => {
        this.setState({
            offset: (e - 1) * this.state.limit
        })
    }

    searchHandler = e => {
        this.setState({ keyword: e.target.value })
    }

    getData() {
        const { keyword, data } = this.state;
        const result = (data) ? 0 : data.filter(stock => stock.symbol.search(new RegExp(keyword, 'i')) === 0);
        if (result.length === 0) return false;
        return result;
    }

    render() {
        const { offset, limit, loading } = this.state;
        const data = this.getData();
        const rows = data ? data.slice(offset, offset + limit)
            .map(item => {
                const { symbol, name, price } = item;
                return <BorderDiv key={symbol}>
                    <NavLink style={{ textDecoration: 'none' }} to={"/buy/" + symbol}>
                        <StockElement {...{ symbol, name, price }} />
                    </NavLink>
                </BorderDiv>
            }) : '';

        return <StockContainer>
            {loading && <Loading />}
            <AlignCenterDiv>
                <Search onChange={this.searchHandler} />
            </AlignCenterDiv>
            <ListContainer>{rows}</ListContainer>

            {(!data && !loading) && <NotFnd>Not Found</NotFnd>}
            <AlignPaginator style={{ marginTop: '35px' }}>
                <Pagination size="small" total={data.length} onChange={this.onChangeHnd}
                    showSizeChanger={false}
                    defaultPageSize={limit} />
            </AlignPaginator>
        </StockContainer>
    }
}

export default Stock;
