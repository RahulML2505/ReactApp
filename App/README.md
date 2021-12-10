# React App

A demo react app to learn a basic react production, throw [components](./src/components) and [node_module](./node_modules).

## Getting started

- Initializing `node_modules`:

  ```bash
  $ npm init
  ```

- Installing Modules:

  ```bash
  $ yarn add react react-scripts react-dom react-router-dom
  $ yarn add @babel/core @babel/node @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader
  $ yarn add webpack webpack-cli webpack-dev-server
  $ yarn add @babel/eslint-parser @rollup/plugin-babel cra-template web-vitals joi less
  ```

- Creating required folders:

  use `mkdir` command as `mkdir <folder-name>`: `src`, `public`, `static`, `templates`

- Configuring `webpack` module with `webpack.config.json`:

  ```bash
  $ touch webpack.config.js
  ```

  visit the [code](./webpack.config.js).

- Configuring `babel-loader` module with `babel.config.json`:

  ```bash
  $ touch babel.config.json
  ```

  visit the [code](./babel.config.json).

- Creating `JavaSrcipt` files:

  under the [`src`](./src) directory, create `index.js` & `App.js` files, and make a [`components`](./src/components) directory.

  the project directory should look like bellow,

  ```
  app/
  │
  ├── src/
  │   ├── components/
  │   │
  │   ├── App.js
  │   └── index.js
  │
  ```

- Writing some code:

  - `index.js`:

    ```JavaScript
    import React from "react";
    import ReadctDOM from "react-dom";
    import App from "./App";

    ReactDOM.render(
      <React.StrictMode>
        <App />
      <React.StrictMode/>,
      document.getElementById("main")
    );
    ```

  - `App.js`:

    ```JavaScript
    import React from "react";

    function App() {
      return (
        <>
          <h1> Hello World! </h1>
        </>
      );
    }

    export default App;
    ```
