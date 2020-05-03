import React, { Component } from 'react';
import { Pagination } from "antd"; // see https://ant.design/components/pagination/#header too learn more
import {BorderDiv, AccountContainer, AlignPaginator } from '../../styledComponents/componentsStyle.js'
import AccountStock from '../../styledComponents/AccountStockElement.js';
import {getStockData, getUserData} from "../../data";
import {ListContainer} from "../../styledComponents/componentsStyle";
import Loading from '../Loading/Loading.js';

class Account extends Component {
    state = {
        offset: 0,
        limit: 20,
        userStocks: [],
        loading: true
    }

    componentDidMount() {
        getUserData()
            .then(userData => {
                return Promise.all(userData[1].map(stock => {
                    // update data about actual stock prices
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
            .catch(console.log)
            .finally(() => this.setState({ loading: false }))
    }

    // changing current page
    onChangeHnd = e => {
        this.setState({
            offset: (e - 1) * this.state.limit
        })
    }

    render() {
        const {userStocks, limit, offset, loading} = this.state;
        const content = userStocks.slice(offset, offset + limit)
                .map(stock => <BorderDiv key={stock.id}><AccountStock {...stock}/></BorderDiv>);
        return <AccountContainer>
                    {loading && <Loading />}
                    <ListContainer>{content}</ListContainer>
                        <AlignPaginator style={{marginTop: '25px'}}>
                            <Pagination size="small"
                                        total={userStocks.length}
                                        onChange={this.onChangeHnd}
                                        showSizeChanger={false}
                                        defaultPageSize={limit} />
                        </AlignPaginator>
                </AccountContainer>
    }
}

export default Account;