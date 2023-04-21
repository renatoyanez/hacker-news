# Hacker News for Apply Digital

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode and it generates snapshots.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:update`

Updates all the snapshots, or you can just run all tests and type "u"

### `npm run coverage`

Logs detailed test coverage and generates **coverage** folder. Make sure it's added to the .gitignore file

### `npm run prettier:check`

Checks prettier logs

### `npm run lint`

Logs all detected prettier errors

### `npm run lint:fix`

Fixes all errors detected by prettier

### `npm run format`

Similar to previous. It fixes format by prettier standards

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Project structure

Everything you need lives inside the `/src` directory:

    src
    ├── api
    ├── assets
    ├── components
    ├── context
    ├── helpers
    ├── hooks
    ├── interfaces
    ├── pages
    ├── styles

- **`/api`**: contains the api definition (routes, parameters and request/response bodies).
- **`/assets`**: contains the app assets (e.g. localized strings).
- **`/components`**: The `/components` folder covers the internal library of UI components (atomic and molecule components) such as typography, card, dropdown etc. Each of which has its own test file. It also contains molecule components which are relatively simple groups of UI elements functioning together as a single unit.
- **`/context`**: contains global contexts.
- **`/helpers`**: contains necessary data used accross the project.
- **`/hooks`**: contains custom hooks, usually for api calls.
- **`/interfaces`**: The `/interfaces` folder contains interfaces files. Typically interfaces includes models with public properties, which will be used by the application to hold and manipulate application data.
- **`/pages`**: The `/pages` contains the views of the application. Each "page" is made from a larger group of molecule components.
- **`/styles`**: contains all the base global styles of the application.
