# React Payment Logos

[![npm version](https://img.shields.io/npm/v/react-payment-logos.svg)](https://www.npmjs.com/package/react-payment-logos)
[![License](https://img.shields.io/npm/l/react-payment-logos.svg)](https://github.com/iamgutz/react-payment-logos/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/iamgutz/react-payment-logos.svg?style=social)](https://github.com/iamgutz/react-payment-logos)

A collection of SVG icons as React components for various payment methods, including flat, flat-rounded, logo, mono, and mono-outline styles.

![React Payment Logos](assets/react-payment-logos.jpg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
yarn add react-payment-logos
# or
npm install react-payment-logos --save
```

## Usage
Import the icon components based on your preferred style and payment method:
```jsx
import React from 'react';
import { Mastercard, Visa, Paypal } from 'react-payment-logos/dist/flat';
// or
// import Mastercard from 'react-payment-logos/dist/flat/Mastercard';

function App() {
  return (
    <div>
      <Mastercard />
      <Visa />
      <Paypal />
      {/* Add more icons here */}
    </div>
  );
}

export default App;

```

## Available Icons
Here are some of the available icons for each style:

### Flat Style
Mastercard
Visa
Paypal
...
For a complete list of available icons and their usage, refer to the documentation.

## Customization
You can customize the icons using props. For example:
```jsx
<Mastercard width={64} height={64} />
```
## Demo
Check out our [Demo Site](https://iamgutz.github.io/react-payment-logos/) to see the icons in action and experiment with different styles and usage scenarios.

## Contributing
Contributions are welcome! Please read our Contribution Guidelines for details.

## License
This project is licensed under the MIT License © [iamgutz](https://github.com/iamgutz).