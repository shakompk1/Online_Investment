import React, { Component } from 'react';
import { Pagination } from "antd";
import { NotFnd, BorderDiv, AccountContainer, AlignPaginator } from '../style_components/stockStyleComp.js'
import AccountStock from '../AccountStockElement.js';
import {getStockData, getUserData} from "../data";


class Account extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 4,
        pages: 1,
        userStocks: [],
    }

    componentDidMount() {
        getUserData()
            .then(userData => {
                return Promise.all(userData[1].map(stock => {
                    return getStockData(stock.code).then(stockData => {
                            stock.companyName = stockData.profile.companyName;
                            stock.price = stockData.profile.price;
                            const {price, purchasePrice, amount} = stock;
                            const priceDifference = purchasePrice/amount - price;
                            const differenceRate = (priceDifference * 100) / (purchasePrice/amount);
                            stock.priceDifference = priceDifference.toFixed(2);
                            stock.differenceRate = differenceRate.toFixed(2);
                            return stock;
                        })
                }))
            })
            .then(userStocks => {this.setState({userStocks})})
    }

    onChangeHnd = (evn) => {
        this.setState({
            offset: (evn - 1) * this.state.limit
        })
    }


    render() {
        const count = this.state.pages;
        // const rows = this.state.copyData.slice(this.state.offset, this.state.offset + this.state.limit)
        //     .map(item => (<BorderDiv><NavLink style={{ textDecoration: 'none' }}
        //         onClick={() => this.props.onClick(item.name)}
        //         key={item.symbol}
        //         to={"/buy/" + item.symbol}><StockElement symbol={item.symbol} name={item.name} price={item.price} /></NavLink></BorderDiv>));

        return (
            <>
                <AccountContainer>
                    {/* {rows} */}
                    {this.state.userStocks.map(stock => {
                        return <BorderDiv key={stock.id}><AccountStock {...stock}/></BorderDiv>
                    })}
                    {this.state.foundCheck ? (<NotFnd>Not Found</NotFnd>) : (
                        <AlignPaginator style={{ position: "absolute", bottom: "30px" }}>
                            <Pagination size="small" total={count} onChange={this.onChangeHnd}
                                showSizeChanger={false}
                                defaultPageSize={this.state.limit} />
                        </AlignPaginator>
                    )}
                </AccountContainer>
            </>
        );
    }
}

export default Account;