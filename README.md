# vasttrafik-login

Log in to Västtrafik, authenticating global request cookie jar.

## Installation

via npm:

```bash
$ npm install jade
```

## API

```js
var login = require('vasttrafik-login');
login({ username: '<my username>', password: '<my password>' })
  .then(doStuff);
```

## License

MIT
