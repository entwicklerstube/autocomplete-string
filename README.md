# autocomplete-string

> Pure javascript module which returns an object with autocomplete informations by a given string an suggestions array

## Example

```js
import autocomplete from 'autocomplete-string';

autocomplete('foo', ['hello', 'foobar']);
/*
Response:
{
  raw: 'foo',
  hint: 'bar',
  suggestion: 'foobar',
  suggestionIndex: 1
}
*/
```
