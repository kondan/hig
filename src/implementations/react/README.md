# react-hig

React components for the HIG

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save @hig/react-hig
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import { Button } from '@hig/react-hig';

// Styles
import '@hig/react-hig/lib/react-hig.css';

// using CommonJS modules
var ReactHIG = require('@hig/react-hig');
var Button = ReactHIG.Button;
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/@hig/react-hig/lib/react-hig.umd.js"></script>
```

You can find the library on `window.ReactHIG`.

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@hig/react-hig';
import '@hig/react-hig/lib/react-hig.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button title="Hello World!" />
      </div>
    )
  }
}
```
