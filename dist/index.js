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
        .action(function (contract_name, contract_path) {
        //fetch the contract ABI and filter out any functions listed
        var abiMethods = require(path.resolve(process.cwd(), contract_path)).filter(function (fxn) { return fxn.type === 'function'; });
        var reducks = new ReducksGenerator_1.default({ name: contract_name, abi: abiMethods });
        reducks.generate();
    });
    program.on('--help', function () {
        console.log('');
        console.log('  Call with a path to your smart contract ABI.  Will generate the DApp in a folder named `ducks');
        console.log('');
    });
    if (require.main === module) {
        var args = process.argv.slice(2);
        if (args.length != 2) {
            program.help();
        }
        else {
            program.parse(process.argv);
        }
    }
    else {
        module.exports.default = ReducksGenerator_1.default;
    }
});
//# sourceMappingURL=index.js.map