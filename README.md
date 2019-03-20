# abi2reducks
An easy way to convert your smart contract's ABI into reducks modules hooked up to a Redux store.

It expects to be called within an empty directory (e.g. `state`) and will set it up as such:

```
--| /state // Your parent directory, name is arbitrary
----| /reusable
------| actions.ts
------| reducers.ts
------| selectors.ts
------| types.ts
------| util.ts
----| /txDucks
------| /[methodName1] // Each method gets its own duck
--------| actions.ts
--------| index.ts
--------| reducers.ts
--------| selectors.ts
--------| types.ts
------| /[methodName2]
------| /...
----| Contract.ts // Generated web3 interface for your ABI
----| index.ts // Exports store
----| store.ts // Properly configured store
```

## CLI Usage
As a command line utility, install globally and then call the command with the contract name and path to an ABI JSON:

```
$ npm i -g @eximchain/abi2reducks
$ ...
$ abi2reducks --help
$ abi2reducks
```

## Library Usage
As a library, you import the class, create an instance with the two arguments, and then call `generate()`.  The generator class is the module's default export.

```
$ npm i @eximchain/abi2reducks

...

// Import with types
import ReducksGenerator from '@eximchain/abi2reducks'

// Create generator
const duckGen = new ReducksGenerator({
    name : [yourContractName],
    abi : [array of MethodAbi objects]
})

// Create /ducks/... in your cwd()
duckGen.generate()
```