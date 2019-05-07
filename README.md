# autocomplete-string [![Build Status](https://travis-ci.com/entwicklerstube/autocomplete-string.svg?branch=master)](https://travis-ci.com/entwicklerstube/autocomplete-string)

> Pass an array of options and an input string and get a suggestion and a completion string

## Install

```
$ npm install autocomplete-string
```

## Usage

```js
import autocomplete from 'autocomplete-string';

autocomplete('foo', ['hello', 'FoobaR', 'foobaz', 'world']);
/*
  {
    completion: 'baR',
    suggestion: 'Foobar',
    suggestionIndex: 1
  }
*/
```

## API

### autocomplete(input, [list])

Returns the first path found (by respecting the order) or `undefined` if none could be found.

#### input

Type: `string`

HeyHa

#### list

Type: `array`

Foobar

## License

MIT © [entwicklerstube](https://entwicklerstube.com)
