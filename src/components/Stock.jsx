import React, { Component } from 'react';
import { Pagination } from "antd";
import StockElement from '../stockElement';
import Search from '../Search.jsx';
import "antd/es/pagination/style/css";
import { NotFnd, BorderDiv, StockContainer, AignCenterDiv, AlignPaginator } from '../style_components/stockStyleComp.js'
import styled from 'styled-components'
import Main from "../Main";
import {NavLink} from "react-router-dom";

class Stock extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 4,
        pages: 1
    }

    dataFromApi = () => {
        fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
            .then(result => result.json())
            .then(data => {
                let count = Math.ceil(data.symbolsList.length / this.state.limit);
                this.setState({
                    data: data.symbolsList,
                    copyData: data.symbolsList,
                    pages: count,
                    foundCheck: false
                })
            });
    }

    componentDidMount() {
        this.dataFromApi();
    }

    onChangeHnd = (evn) => {
        this.setState({
            offset: (evn - 1) * this.state.limit
        })
    }

    searchHndlr = (evnt) => {
        let elem = this.state.data.filter(item => (item.symbol.search(new RegExp(evnt.target.value.trim(), 'i')) === 0));

        let count = Math.ceil(elem.length / this.state.limit);
        this.setState({
            copyData: elem,
            pages: count,
            foundCheck: (elem.length > 0 ? false : true)
        })
    }
    
    render() {
        const count = this.state.pages;
        const rows = this.state.copyData.slice(this.state.offset, this.state.offset + this.state.limit)
            .map(item => (<NavLink style={{ textDecoration: 'none' }}
                onClick={() => this.props.onClick(item.name)}
                key={item.symbol}
                to={"/buy/" + item.symbol}><BorderDiv key={item.name}><StockElement symbol={item.symbol} name={item.name} price={item.price} /></BorderDiv></NavLink>));

        return (
            <>
                {/* <HrLine /> */}
                <StockContainer>
                    <AignCenterDiv>
                        <Search onChange={this.searchHndlr} />
                    </AignCenterDiv>
                    {rows}
                    {this.state.foundCheck ? (<NotFnd>Not Found</NotFnd>) : (
                        <AlignPaginator style={{ position: "absolute", bottom: "24px" }}>

                            <Pagination size="small" total={count} onChange={this.onChangeHnd}
                                showSizeChanger={false}
                                defaultPageSize={this.state.limit} />
                        </AlignPaginator>
                    )}
                </StockContainer>
            </>
        );
    }
}


export default Main(Stock);