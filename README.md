# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `DO NOT run "yarn/npm start", because CRA will overwrite the tsconfig.json file.`

If you use webpack-dev-server, change the "noEmit" to "false" in tsconfig.json, because "yarn/npm start" will overwrite it with "true".

## `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## `npm test`

Launches the test runner in the interactive watch mode.

## `npm run webpack`

Builds the app for production to the `dist` folder.\
(Before "npm run webpack", change the "noEmit" to "false" in tsconfig.json)
