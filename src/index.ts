#!/usr/bin/env node

import { AbiDefinition } from "ethereum-types";
import ReducksGenerator from './ReducksGenerator';
let fs = require("fs");
let path = require("path");
const program = require('commander');
const npmPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, './../package.json')));


interface Option {
    price?: number,
    gas?: number,
    config?: string,
    provider?: string, 
}

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
    .action((contract_name: string, contract_path:string) => {
        // let config = { eth : {
        //     provider : 'http://localhost:8545',
        //     default_gas : 0,
        //     default_gasPrice : 40,
        //     price: 40,
        //     gas: 40
        // }};
        console.log()

        //fetch the contract ABI and filter out any functions listed
        const abiMethods = JSON.parse(
            fs.readFileSync(contract_path)
        ).filter((fxn:AbiDefinition) => fxn.type === 'function');
        const reducks = new ReducksGenerator({name: contract_name, abi: abiMethods});
        //TODO: generate file/folder structure (index.ts)
        //TODO: generate input types for each function (types.ts & constants.ts)
        //TODO: generate state type to know the shape we're talking about (reducers.ts)
        //TODO: generate selectors to get the rlp encoded tx data when necessary (selectors.ts)
        reducks.generate();
    })

program.on('--help', () => {
    console.log('');
    console.log('  Call with a path to your smart contract ABI.  Will generate the DApp in a folder named `ducks');
    console.log('');
})

if (require.main === module){
    const args = process.argv.slice(2)
    console.log('args: ',args);
    if (args.length != 2){
        program.help();
    } else {
        program.parse(process.argv);
    }
} else {
    module.exports.default = ReducksGenerator;
}