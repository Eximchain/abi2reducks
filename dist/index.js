#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ReducksGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReducksGenerator_1 = require("./ReducksGenerator");
    var fs = require("fs");
    var path = require("path");
    var program = require('commander');
    var npmPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, './../package.json')));
    program
        .version(npmPackage.version)
        .name(npmPackage.name)
        .description(npmPackage.description)
        .usage('<contract_name> <contract_path>')
        // .option('-C, --config <config>', 'Specify path to config.json from current working directory.  If other options are also specified, they will override values in file.')
        // .option('-P, --provider <provider>', 'Set the Web3 provider; defaults to localhost:8545.')
        // .option('-p, --price <price>', 'Set default gas price, must be int; defaults to 40.', parseInt)
        // .option('-g, --gas <gas>', 'Specify default gas, must be int; defaults to 0.', parseInt)
        // .option('-o, --output <output>', 'Specify output path relative to current directory; path must exist; defaults to ./')
        .action(function (contract_name, contract_path) {
        // let config = { eth : {
        //     provider : 'http://localhost:8545',
        //     default_gas : 0,
        //     default_gasPrice : 40,
        //     price: 40,
        //     gas: 40
        // }};
        console.log();
        //fetch the contract ABI and filter out any functions listed
        var abiMethods = JSON.parse(fs.readFileSync(contract_path)).filter(function (fxn) { return fxn.type === 'function'; });
        var reducks = new ReducksGenerator_1.default(contract_name, abiMethods);
        //TODO: generate file/folder structure (index.ts)
        //TODO: generate input types for each function (types.ts & constants.ts)
        //TODO: generate state type to know the shape we're talking about (reducers.ts)
        //TODO: generate selectors to get the rlp encoded tx data when necessary (selectors.ts)
        reducks.generate();
    });
    program.on('--help', function () {
        console.log('');
        console.log('  Call with a path to your smart contract ABI.  Will generate the DApp in a folder named `ducks');
        console.log('');
    });
    if (require.main === module) {
        var args = process.argv.slice(2);
        console.log('args: ', args);
        if (args.length != 2) {
            program.help();
        }
        else {
            program.parse(process.argv);
        }
    }
});
//# sourceMappingURL=index.js.map