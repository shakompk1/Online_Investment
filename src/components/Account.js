import React, { Component } from 'react';
import { Pagination } from "antd";
import { HrLine, NotFnd, BorderDiv, AccountContainer, AignCenterDiv, AlignPaginator } from '../style_components/stockStyleComp.js'
import AccountStock from '../AccountStockElement.js';


class Account extends Component {
    state = {
        data: [],
        copyData: [],
        offset: 0,
        limit: 4,
        pages: 1
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
                    <BorderDiv><AccountStock /></BorderDiv>
                    <BorderDiv><AccountStock /></BorderDiv>
                    <BorderDiv><AccountStock /></BorderDiv>
                    <BorderDiv><AccountStock /></BorderDiv>
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