# @blokdots/components

## Installation

```shell
npm install @blokdots/components --save
```

```shell
yarn add @blokdots/components
```

## Example

```js
const components = require("@blokdots/components");

let timer = new components.Timer(0);

timer.on("change", (value) => {
  console.log(value);
});

timer.start();
```
