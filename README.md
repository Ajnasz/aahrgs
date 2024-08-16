# aahrgs

`aahrgs` is a simple JavaScript library for parsing command-line arguments. It processes an array of command-line arguments and returns an object where the keys are the argument names (without leading dashes) and the values are either `true` (for flags) or the argument values.

## Installation

You can install `aahrgs` using npm:

```bash
npm install aahrgs
```

## Usage

Here's an example of how to use `aahrgs` in your project:

```javascript
const aahrgs = require('aahrgs');

const argv = process.argv.slice(2);
const args = aahrgs(argv);

console.log(args);
```

If you run the above script with the following command:

```bash
node script.js --name John -a 25 --verbose
```

The output will be:

```json
{
  "name": "John",
  "a": "25",
  "verbose": true
}
```

You can also pass an array of arguments directly to the function:

```javascript
const aahrgs = require('aahrgs');

const args = aahrgs(['--name', 'John', '-a', '25', '--verbose']);

console.log(args);
```

The output will be the same:

```json
{
  "name": "John",
  "a": "25",
  "verbose": true
}
```

## API

### `aahrgs(argv)`

Parses command-line arguments.

#### Parameters

- `argv` (Array of strings): The array of command-line arguments.

#### Returns

- `Object`: The parsed arguments as key-value pairs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any questions or suggestions, please open an issue on the GitHub repository.
