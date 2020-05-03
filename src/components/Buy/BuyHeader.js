import React from "react";
import Style from './buy.module.scss';
import {NavLink} from "react-router-dom";
import back from '../../img/left.png';
import {getStockData} from "../../data";

class BuyHeader extends React.Component{
    state = {
        companyName: '',
    }

    componentDidMount() {
        getStockData(this.props.name)
            .then(res => {this.setState({companyName: res.profile.companyName})})
    }

    render() {
        return <div className={Style.buyHeader}>
                    <NavLink className={Style.link} to="/stock">
                        <img src={back} alt="back"/>
                        <span>Back</span>
                    </NavLink>
                    <p className={Style.name}>
                        <span>Buy {this.state.companyName}</span>
                    </p>
                </div>
    }
}

export default BuyHeader;
