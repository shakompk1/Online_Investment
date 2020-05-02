import React from 'react';
import {Input} from "./stockStyleComp";

export default props =>
    <div className="search-container">
        <Input onChange={props.onChange} maxLength={11} placeholder="enter company ticker"/>
        <svg className="search-svg" width="22" height="22" viewBox="0 0 22 22" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.375" cy="9.375" r="8.375" stroke="black" strokeWidth="2"/>
            <line x1="15.7071" y1="15.5429" x2="20.7071" y2="20.5429" stroke="black" strokeWidth="2"/>
        </svg>
    </div>