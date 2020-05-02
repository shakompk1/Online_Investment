import React, {Component} from 'react';
import {Pagination} from "antd";
import StockElement from '../styledComponents/stockElement';
import Search from '../styledComponents/Search.js';
import {NotFnd, BorderDiv, StockContainer, AlignCenterDiv, AlignPaginator} from '../styledComponents/componentsStyle.js'
import {NavLink} from "react-router-dom";
import {getStocks} from "../data";

class Stock extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 4,
        pages: 1
    }

    componentDidMount() {
        getStocks()
            .then(stocks => {
                const count = Math.ceil(stocks.count / this.state.limit);
                this.setState({
                    data: stocks.data,
                    copyData: stocks.data,
                    pages: count,
                    foundCheck: false
                })
            })
            .catch(console.log)
    }

    onChangeHnd = (evn) => {
        this.setState({
            offset: (evn - 1) * this.state.limit
        })
    }

    searchHandler = e => {
        let elem = this.state.data.filter(item => (item.symbol.search(new RegExp(e.target.value.trim(), 'i')) === 0));
        let count = Math.ceil(elem.length / this.state.limit);
        this.setState({
            copyData: elem,
            pages: count,
            foundCheck: (elem.length <= 0)
        })
    }

    render() {
        const {copyData, offset, limit, foundCheck} = this.state;
        const count = copyData.length;
        const rows = copyData.slice(offset, offset + limit)
            .map(item => {
                const {symbol, name, price} = item;
                return <BorderDiv key={symbol}>
                    <NavLink style={{textDecoration: 'none'}} to={"/buy/" + symbol}>
                        <StockElement {...{symbol, name, price}}/>
                    </NavLink>
                </BorderDiv>
            });

        return <StockContainer>
            <AlignCenterDiv>
                <Search onChange={this.searchHandler} />
            </AlignCenterDiv>
            {rows}
            {foundCheck ? (<NotFnd>Not Found</NotFnd>) : (
                <AlignPaginator style={{ position: "absolute", bottom: "13px" }}>
                    <Pagination size="small" total={count} onChange={this.onChangeHnd}
                                showSizeChanger={false}
                                defaultPageSize={limit} />
                </AlignPaginator>
            )}
        </StockContainer>
    }
}


export default Stock;
