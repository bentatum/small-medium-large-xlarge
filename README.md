# small-medium-large-xlarge

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/small-medium-large-xlarge.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/small-medium-large-xlarge
[travis-image]: https://img.shields.io/travis/bentatum/small-medium-large-xlarge.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/small-medium-large-xlarge
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

given a set of screen widths and a screen width value, this will tell you if your screen is small, medium, large or extra large.

## Install

```
npm install small-medium-large-xlarge
```

## Usage

```js
import { getScreenSize } from 'small-medium-large-xlarge'
const breakpoints = {
  small: 420,
  medium: 768,
  large: 1024
}

const screenSize = getScreenSize(400, breakpoints) // 'small'
const screenSize = getScreenSize(700, breakpoints) // 'medium'
const screenSize = getScreenSize(1000, breakpoints) // 'large'
const screenSize = getScreenSize(1200, breakpoints) // 'xlarge'
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
