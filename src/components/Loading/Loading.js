import React from 'react';
import Style from './loading.module.scss';
import LoadLogo from '../../img/loading-gif.gif';

export default () => <div className={Style.loadingContainer}>
                        <div className={Style.loadingElement}>
                            <img src={LoadLogo} alt="loading"/>
                        </div>
                    </div>