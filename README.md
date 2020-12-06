# superstruct-chain

A simple module that enables the chaining of calls with [superstruct](https://github.com/ianstormtaylor/superstruct), so you can avoid parenthesis hell in your object definitions.

## Usage

```js
import { string, number, object } from 'superstruct';
import 'superstruct-chain';

const Config = object({
  port: number().defaulted(80),
  address: string().optional(),
});
```

## Methods added

The following methods are monkey-patched into the prototype of `Struct`:

* [optional](https://docs.superstructjs.org/guides/02-validating-data#optional-values)
* [defaulted](https://docs.superstructjs.org/api-reference/coercions#defaulted)
* [coerce](https://docs.superstructjs.org/guides/03-coercing-data#custom-coercions)
* [refine](https://docs.superstructjs.org/guides/04-refining-validation#custom-refinments)
* [masked](https://docs.superstructjs.org/api-reference/coercions#masked)
* [trimmed](https://docs.superstructjs.org/api-reference/coercions#masked)
* [empty](https://docs.superstructjs.org/api-reference/refinements#empty)
* [min](https://docs.superstructjs.org/api-reference/refinements#min)
* [below](https://docs.superstructjs.org/api-reference/refinements#below)
* [pattern](https://docs.superstructjs.org/api-reference/refinements#pattern)
* [size](https://docs.superstructjs.org/api-reference/refinements#size)
* [assign](https://docs.superstructjs.org/api-reference/utilities#assign)
* [omit](https://docs.superstructjs.org/api-reference/utilities#omit)
* [partial](https://docs.superstructjs.org/api-reference/utilities#partial)
* [pick](https://docs.superstructjs.org/api-reference/utilities#pick)

These methods should be invoked without the first argument of their functional counterpart.
