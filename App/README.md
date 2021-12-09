# React App

A demo react app to learn a basic react production, throw components and [node_module](./src/components).

## Getting started

- Initializing `node_modules`:

  ```bash
  npm init
  ```

- Installing Modules:

  ```bash
  yarn add react react-scripts react-dom react-router-dom
  yarn add @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader
  yarn add webpack webpack-cli webpack-dev-server
  yarn add @babel/eslint-parser @rollup/plugin-babel cra-template web-vitals joi less
  ```

- Creating required folders:

  - src
  - static
  - public
  - templates

- Configuring `webpack` module with `webpack.config.json`:

  ```bash
  touch webpack.config.js
  ```

  visit the [code](./webpack.config.js).

- Configuring `babel-loader` module with `babel.config.json`:

  ```bash
  touch babel.config.json
  ```

  visit the [code](./babel.config.json).
