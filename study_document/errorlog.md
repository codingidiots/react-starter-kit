## postcss: No PostCSS Config found in
**When**
```
$ npm run webpack:dev
```
**Message**
```
Error: No PostCSS Config found in:
```
**coding**
```
<<src/index.js>>
import './index.style.css';
```
**solution**
- `postcss.config.js`에 있는 관련된 패키지를 모두 설치함.
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
  ```
  npm install sugarss postcss-import postcss-preset-env cssnano --save-dev
  ```
**reference**
- https://github.com/postcss/postcss-loader/issues/311#issuecomment-342564332
------

## postcss: SyntaxError (1:6) Unnecessary curly bracket
**When**
```
$ npm run webpack:dev
```
**Message**
```
SyntaxError (1:6) Unnecessary curly bracket
> 1 | .App {
    |      ^
  2 |   text-align: center;
  3 | }
```
**solution**
- `sugarss` 에서 문제가 나오는 것임

**Refrence**
- https://github.com/postcss/postcss/issues/1062

------
## svg태그가 아니라 string형태로 나옴
**coding**
```
import logo from './logo.svg';
...
<div className="App-logo" alt="logo">
  {logo}
</div>
```
