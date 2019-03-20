
import {MethodAbi} from 'ethereum-types';
import { pascalCase, camelCase } from './handlebars'
const shell = require('shelljs');
let path = require("path");
let fs = require("fs-extra");

const { writeTemplateToPath } = require('./util');

export type ReducksInput = {
    name: string,
    abi: MethodAbi[]
}

export class ReducksGenerator {

    constructor({name, abi}:ReducksInput){
        this.START_DIR = process.cwd();
        this.REDUCKS_DIR = `${this.START_DIR}/txDucks`
        this.ABI = abi.filter(fxn => fxn.type === 'function');
        this.CONTRACT_NAME = name;
        this.REUSABLE_DIR = path.resolve(__dirname, '../src/reusable');
    }

    private CONTRACT_NAME:string;
    private START_DIR:string;
    private REDUCKS_DIR:string;
    private ABI:MethodAbi[];
    private REUSABLE_DIR : string;

    public generate(){
        shell.cd(`${this.START_DIR}`);
        this.initReducks();
    }

    private initReducks = () => {
        // cd into directory and create folder for each ABI method
        writeTemplateToPath('./templates/state_index.hbs', './index.ts');
        writeTemplateToPath('./templates/store.hbs', './store.ts');
        writeTemplateToPath('./templates/contract.hbs', './Contract.ts', {
            abi : this.ABI,
            // TODO: Hook up an environment variable generator so this isn't hardcoded
            web3URL : 'https://gamma-tx-executor-us-east.eximchain-dev.com'
        })
        fs.copySync(this.REUSABLE_DIR, path.resolve(process.cwd(), './reusable'))
        fs.ensureDirSync(this.REDUCKS_DIR);
        shell.cd(this.REDUCKS_DIR);
        writeTemplateToPath('./templates/ducks_index.hbs', './index.ts', { abi : this.ABI })
        this.ABI.forEach(fxn => this.writeTxDuck(fxn));
    }

    private writeTxDuck = (method:MethodAbi) => {
        const dirName = camelCase(method.name);
        fs.ensureDirSync(dirName)
        shell.cd(dirName);
        const templateArg = {
            methodName : method.name,
            methodAbi : method,
            titleName : pascalCase(method.name)
        };
        writeTemplateToPath('./templates/duck/index.hbs', './index.ts', templateArg);
        writeTemplateToPath('./templates/duck/actions.hbs', './actions.ts', templateArg);
        writeTemplateToPath('./templates/duck/reducers.hbs', './reducers.ts', templateArg)
        writeTemplateToPath('./templates/duck/selectors.hbs', './selectors.ts', templateArg);
        writeTemplateToPath('./templates/duck/types.hbs', './types.ts', templateArg);
        shell.cd('..');
    }

}

export default ReducksGenerator;