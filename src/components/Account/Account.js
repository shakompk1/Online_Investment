import React, { Component } from 'react';
import { Pagination } from "antd";
import { NotFnd, BorderDiv, AccountContainer, AlignPaginator } from '../../styledComponents/componentsStyle.js'
import AccountStock from '../../styledComponents/AccountStockElement.js';
import {getStockData, getUserData} from "../../data";
import Loading from '../loading/Loading.js';


class Account extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 4,
        pages: 1,
        userStocks: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
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
            .finally(() => this.setState({ loading: false }))
    }

    onChangeHnd = (evn) => {
        this.setState({
            offset: (evn - 1) * this.state.limit
        })
    }


    render() {
        const count = this.state.userStocks.length;
        return (
            <>
                <AccountContainer>
                {!this.state.loading ? null : (<Loading />)}
                    {this.state.userStocks.slice(this.state.offset, this.state.offset + this.state.limit)
                    .map(stock => {
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