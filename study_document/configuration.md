# React-Starter-Kit Installation & Configuration Process from Nothing

## Install React
  ```
  npm install react react-dom --save-dev
  ```
## Install webpack
  ```
  $ npm init -y
  $ npm install webpack webpack-cli --save-dev
  ```

## configure `private: true` in package.json
  **package.json**
  ```
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2"
    },
    "dependencies": {}
  }
  ```
## import loaders
  ### babel-loader
  ```
  npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
  ```

  ### style(css, sass) related
  ```
  npm install --save-dev css-loader style-loader sass-loader node-sass
  ```

  ### postcss loader
  - installation
    ```
    npm install postcss-load-config postcss-loader --save-dev
    ```
  - create `postcss.config.js`
    ```
    module.exports = {
      parser: 'sugarss',
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {}
      }
    }
    ```
  - install related in context of `postcss.config.js`
    ```
    npm install sugarss postcss-import postcss-preset-env cssnano --save-dev
    ```

  ### svg inline loader
  ```
  npm install svg-inline-loader --save-dev
  ```

## webpack dev server configuration
  **install `webpack-dev-server`**
  ```
  npm install --save-dev webpack-dev-server
  ```
  **package.json**
  ```
  ...
  "scripts": {
  +  "webpack:dev" : "webpack-dev-server --open"
  }
  ...
  ```