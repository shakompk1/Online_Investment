import React  from 'react';
import Style from './loading.module.scss';
import LoadLogo from '../../img/Pasha_Holding_logo2.png';


export default () => <div className={Style.loadingContainer}>
                        <div className={Style.loadingElement}>
                            <img src={LoadLogo} alt="Loading logo" />
                        </div>
                    </div>