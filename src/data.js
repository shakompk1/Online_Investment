function getStocks(){
    return fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
        .then(res => res.json())
        .then(result => result.symbolList)
        .catch(() => 'Произошла ошибка во время загрузки данных!');
}

function getUserData(){
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

function buyStock(data, balance) {
    const headers = {'Content-type': 'application/json'}
    const currentBalance = balance - data.purchasePrice;

    const purchaseReq = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3/stocks', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(() => 'Ошибка при загрузке данных на сервер');

    const editBalance = fetch('https://5e8da89e22d8cd0016a798db.mockapi.io/users/3', {
        method: 'PUT',
        headers,
        body: JSON.stringify({currentBalance})
    })
        .then(res => res.json())
        .catch(() => 'Произошла ошибка во время загрузки данных на сервер');

    return Promise.all([purchaseReq, editBalance]);

}

export {getUserData, buyStock, getStocks};