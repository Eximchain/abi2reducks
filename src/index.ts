#!/usr/bin/env node

import { AbiDefinition } from "ethereum-types";
import ReducksGenerator from './ReducksGenerator';
let fs = require("fs");
let path = require("path");
const program = require('commander');
const npmPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, './../package.json')));

program
    .version(npmPackage.version)
    .name(npmPackage.name)
    .description(npmPackage.description)
    .usage('<contract_name> <contract_path>')
    .action((contract_name: string, contract_path:string) => {
        
        //fetch the contract ABI and filter out any functions listed
        const abiMethods = require(path.resolve(path.cwd(), contract_path)).filter((fxn:AbiDefinition) => fxn.type === 'function');
        const reducks = new ReducksGenerator({name: contract_name, abi: abiMethods});
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