# Savings Calculator

[![Netlify Status](https://api.netlify.com/api/v1/badges/f34be1ce-61d8-4c7d-9536-c1761244ed25/deploy-status)](https://app.netlify.com/sites/savings-calculator-demo/deploys)

This is a simple savings calculator written in React, where the user can calculate their savings either by defining goal and saving monthly deposit for certain amount of time or by setting a montly deposit amount.

You can check the demo at https://savings-calculator-demo.netlify.app/

## Features

- Users can choose (i) mode by which calculation is done, (ii) the value they want to reach or deposit monthly and (iii) the date they plan to reach the goal.

## Built using

- Create React App
- Typescript
- ChakraUI
- date-fns

## Structure overview

A quick look at the top-level files and directories of this project.

    .
    ├── node_modules
    ├── src
    |   ├── components
    |       ├── MonthPicker.tsx
    |   ├── utils
    |       ├── getSavings.ts
    |       ├── getNumber.ts
    |   ├── theme
    |   ├── styles
    |   ├── App.tsx
    ├── .gitignore
    ├── .prettierrc
    ├── .prettierignore
    ├── .eslintrc
    ├── .eslintignore
    ├── tsconfig.json
    ├── yarn.lock
    ├── package.json
    └── README.md

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run:

### `yarn or yarn install`

Installs all dependencies defined in package.json file

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
