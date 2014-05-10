# vasttrafik-login

Log in to Västtrafik, authenticating global request cookie jar.

[![Build Status](https://img.shields.io/travis/krawaller/vasttrafik-login/master.svg)](https://travis-ci.org/krawaller/vasttrafik-login)

## Installation

via npm:

```bash
$ npm install vasttrafik-login
```

## API

```js
var login = require('vasttrafik-login');
login({ username: '<my username>', password: '<my password>' })
  .then(doStuff);
```

## License

MIT
