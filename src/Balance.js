import React, { Component } from 'react';

class Balance extends Component {
    render() {
        return <footer>
            <p>Balance</p>
            <p>{this.props.amount} $</p>
        </footer>
    }
}

export default Balance;