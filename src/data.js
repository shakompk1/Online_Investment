// getting list of all stocks available for purchasing 
function getStocks() {
    return fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
        .then(res => res.text())
        .then(res => {
            try {
                return JSON.parse(res);
            } catch (err) {
                const lastRecStart = err.lastIndexOf('{');
                const trimmedData = err.substr(0, lastRecStart - 2) + ']}';
                return JSON.parse(trimmedData);
            }
        })
        .then(result => result.symbolsList)
        .catch(() => 'Произошла ошибка во время загрузки данных!');
}

// getting data about the balance and purchased stocks. 
function getUserData() {
    const userData = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3')
        .then(res => res.json())
        .then(result => result)
        .catch(() => 'Произошла ошибка во время загрузки данных!');

    const userStocks = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks')
        .then(res => res.json())
        .then(result => result)
        .catch(() => 'Произошла ошибка во время загрузки данных!');

    return Promise.all([userData, userStocks]);
}

// buying the stocks.
// 'data' should contains the object with information about the stocks,  i.e.:
// {"code":"AAPL","amount":20,"purchasePrice":5781.4}
function buyStock(data, balance) {
    const headers = { 'Content-type': 'application/json' }
    const currentBalance = balance - data.purchasePrice;

    const purchaseReq = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(() => 'Произошла ошибка при загрузке данных на сервер');

    const editBalance = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3', {
        method: 'PUT',
        headers,
        body: JSON.stringify({ currentBalance })
    })
        .then(res => res.json())
        .catch(() => 'Произошла ошибка во время загрузки данных на сервер');

    return Promise.all([purchaseReq, editBalance]);

}
// TODO: not quite ready, dunno how Promise works! (
// selling the stocks.
// 'data' should contains the object with information about the stocks,  i.e.:
// {"code":"AAPL","amount":20,"purchasePrice":5781.4}
function sellStock(data, balance) {
    console.log(data, balance)
    const headers = { 'Content-type': 'application/json' }
    const currentBalance = +balance + +data.purchasePrice;
    const newPurchas = data.oldPrice * data.counter;
    const purchaseReq = (data.counter === 0) ?
        fetch(`https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks/${data.id}`, {
            method: 'DELETE',
            headers
        }) : fetch(`https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks/${data.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify({
                "amount": data.counter,
                "purchasePrice": newPurchas
            }),
        })
            .then(res => res.json())
            .catch(() => 'Произошла ошибка при загрузке данных на сервер');
    const editBalance = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3', {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            "currentBalance": currentBalance
        })
    })
        .then(res => res.json())
        .catch(() => 'Произошла ошибка во время загрузки данных на сервер');

    return Promise.all([purchaseReq, editBalance]);

}

// Getting information about stock data
function getStockData(code) {
    return fetch('https://financialmodelingprep.com/api/v3/company/profile/' + code)
        .then(res => res.json())
        .then(result => result)
        .catch(() => 'Произошла ошибка во время загрузки данных');
}

// removing all user's stocks
function deleteData() {
    return fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks')
        .then(res => res.json())
        .then(result => result)
        .then(stocks => Promise.all(stocks.map(stock => {
            return fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks/' + stock.id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
        }))).then(res => res)
}

export { getUserData, buyStock, getStocks, getStockData, deleteData, sellStock };
