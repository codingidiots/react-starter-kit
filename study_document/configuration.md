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
  - #### package.json
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
## install Loaders
  - ### [babel-loader](https://webpack.js.org/loaders/babel-loader/)
    - install
      ```
      npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
      ```
    - webpack.config.js
      ```
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
      ```

  - ### [style-loader](https://webpack.js.org/loaders/style-loader/)
    - installation
      ```
      npm install --save-dev css-loader style-loader
      ```
    - webpack.config.js
      ```
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      ```
  - ### [sass-loader](https://webpack.js.org/loaders/sass-loader/)
    - installation
      ```
      npm install sass-loader node-sass --save-dev
      ```
    - webpack.config.js
      ```
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
      ```

  - ### [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
    - installation
      ```
      npm install postcss-load-config postcss-loader --save-dev
      ```
    - **!! there are several things to configure !!**: create `postcss.config.js`
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

  - ### [file-loader](https://webpack.js.org/loaders/file-loader/)
    - installation
      ```
      npm install file-loader --save-dev
      ```
    - webpack.config.js
      ```
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        use: [
          {
            loader: 'file-loader',
            options: {},
          }
        ],
      }
      ```

## install Plugins
  - #### [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
    - installation
      ```
      npm install --save-dev html-webpack-plugin
      ```
    - webpack.config.js
      ```
      var HtmlWebpackPlugin = require('html-webpack-plugin');
      ...
      module.exports = {
        ...
        plugins: [
          new HtmlWebpackPlugin({
            template: './codingidiots/index.html'
          })
        ]
      }
      ```

## webpack dev server configuration
  - #### install [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)
    ```
    npm install --save-dev webpack-dev-server
    ```
  - #### package.json
    ```
    ...
    "scripts": {
    +  "webpack:dev" : "webpack-dev-server --open"
    }
    ...
    ```