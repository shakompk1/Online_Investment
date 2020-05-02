import React, { Component } from 'react';
import Style from './loading.module.scss';
import LoadLogo from '../img/Pasha_Holding_logo2.png';


class Loading extends Component {
    render() {
        return (
            <div className={Style.loadingContainer}>
                <div className={Style.loadinElement}>
                    <img src={LoadLogo} />
                </div>
            </div>
        );
    }
}

export default Loading;