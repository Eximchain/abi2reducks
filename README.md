# abi2reducks
An easy way to convert your smart contract's ABI into a reducks modules, ready to be plugged into your app's Redux store.

## CLI Usage
As a command line utility, install globally and then call the command with the contract name and path to an ABI JSON:

```
$ npm i -g @eximchain/abi2reducks
$ ...
$ abi2reducks --help
$ abi2reducks
```

## Library Usage
As a library, you import the class, create an instance with the two arguments, and then call `generate()`.  Note the combination of `import` and `require()` syntax below, it is required for the Typescript types to be included on the class.  If you are not using Typescript, then you should be able to use your usual preferred option.  The generator class is the module's default export.

```
$ npm i @eximchain/abi2reducks

...

// Import with types
import ReducksGenerator = require('@eximchain/abi2reducks')

// Create generator
const duckGen = new ReducksGenerator({
    name : [yourContractName],
    abi : [array of MethodAbi objects]
})

// Create /ducks/... in your cwd()
duckGen.generate()
```