This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1) Instalation 
Use `npm install` to install all required dependecied:
    "@testing-library/jest-dom"
    "@testing-library/react"
    "@testing-library/user-event"
    "antd"
    "node-sass"
    "react"
    "react-dom"
    "react-router-dom"
    "react-scripts"
    "styled-components"

2) File system
"src" contains all js and css/scss files
->  "components" contains higher-order components.
    -> "Header" shows navigation between "Account" page and "Stock" page.
    -> "Buy" page cound be reached from "Stock" page.
    -> "Account" page gives the user information about purchased stocks.
    -> "Stock" page gives the user information about all available stocks.
    -> "Loading" page appears while waiting for the server response.
    -> "Foller" contains info about user's balance.
->  "styledComponents" contains child components.
    -> "AccountStockElement" contains one item with stock information displayed in the table on Account page
    -> "componentStyle" contains styled child components.
    -> "counterInput" allows to choose how much stock pieces the user is going to buy. Used in 'buy' page.
    -> "Difference" is used in "AccountStockElement" to display a price changing of the user's stocks.
    -> "Price" used in "stockElement", "AccountStockElement", "Buy" to show styled price.
    -> "Search" filters stocks on "Stock" page.
    -> "StockElement" contains one item with stock information displayed in the table on Stock page
->  "data" is intended for working with data from the server.


3) Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
