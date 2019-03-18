# abi2reducks
> An easy way to convert your smart contract's ABI into a reducks modules, ready to be plugged into your app's Redux store.

- Supports usage both as a command line utility and as a class which can be imported via `require('@eximchain/abi2reducks')`.
- One call usage: construct with name and ABI, then call `.generate()`
- For CLI details, install with `npm i -g @eximchain/abi2reducks`, then run `abi2reducks --help`
- Bundled with Typescript definitions for the class constructor.