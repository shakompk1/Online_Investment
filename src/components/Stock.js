import React, {Component} from 'react';
import {Pagination} from "antd";
import StockElement from '../styledComponents/stockElement';
import Search from '../styledComponents/Search.js';
import {ListContainer, NotFnd, BorderDiv, StockContainer, AlignCenterDiv, AlignPaginator} from '../styledComponents/componentsStyle.js'
import {NavLink} from "react-router-dom";
import {getStocks} from "../data";
import Loading from './Loading/Loading';

class Stock extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 20,
        pages: 1,
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
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
            .finally(() => this.setState({ loading: false }))
            .catch(console.log)
    }

    onChangeHnd = e => {
        this.setState({
            offset: (e - 1) * this.state.limit
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
                    {!this.state.loading ? null : (<Loading />)}
                    <AlignCenterDiv>
                        <Search onChange={this.searchHandler} />
                    </AlignCenterDiv>
                    <ListContainer>{rows}</ListContainer>
                    
                    {foundCheck ? (<NotFnd>Not Found</NotFnd>)
                  : (<AlignPaginator style={{marginTop: '35px'}}>
                        <Pagination size="small" total={copyData.length} onChange={this.onChangeHnd}
                                    showSizeChanger={false}
                                    defaultPageSize={limit} />
                    </AlignPaginator>
                    )}
                </StockContainer>
    }
}


export default Stock;
