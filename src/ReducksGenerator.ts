
import {MethodAbi} from 'ethereum-types';
import DucksGenerator from './DucksGenerator'
import Handlebars from './handlebars'
const shell = require('shelljs');
let path = require("path");
let fs = require("fs");


class ReducksGenerator {

    constructor(name:string, abi:MethodAbi[]){
        //NOTE: make a duck factory 
        this.ducksGenerator = new DucksGenerator()
        //NOTE: set default directories, etc.
        this.START_DIR = process.cwd();
        this.REDUCKS_DIR = `${this.START_DIR}/ducks`
        //NOTE: store contract details
        this.ABI = abi.filter(fxn => fxn.type === 'function');
        this.CONTRACT_NAME = name;
        
    }

    private CONTRACT_NAME:string;
    private START_DIR:string;
    private REDUCKS_DIR:string;
    private ABI:MethodAbi[];
    private types_code:any;
    private export_index_code:any;
    private ducksGenerator:any;

    public generate(){
        shell.cd(`${this.START_DIR}`);
        this.initReducks();
    }

    private initReducks = () => {
        // cd into directory and create folder for each ABI method
        shell.mkdir('ducks');
        shell.cd(this.REDUCKS_DIR);
        shell.touch('reusable.ts');
        this.writeReducksIndex();
        this.writeReducksTypes();
        
        this.ABI.forEach(fxn => {
            this.ducksGenerator.writeDuckFolder(camelCase(fxn.name))
            this.ducksGenerator.writeDuckIndex(camelCase(fxn.name),fxn)
            this.ducksGenerator.writeDuckActions(camelCase(fxn.name),fxn)
            this.ducksGenerator.writeDuckReducers(camelCase(fxn.name),fxn)
            this.ducksGenerator.writeDuckSelectors(camelCase(fxn.name),fxn)
            this.ducksGenerator.writeDuckTypes(camelCase(fxn.name),fxn)
            this.ducksGenerator.writeDuckTests(camelCase(fxn.name),fxn)
        });
    }

    private writeReducksIndex = () =>{
        let export_index_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/reducks_export_index_template.hbs")));
        this.export_index_code = Handlebars.compile(export_index_template)({
            abi: this.ABI
        })
        let export_index_path = path.join(process.cwd(), `/index.ts`);
        fs.writeFileSync(export_index_path, this.export_index_code);

    }
    private writeReducksTypes = () =>{
        let types_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/reducks_types_template.hbs")));
        this.types_code = Handlebars.compile(types_template)({
            abi: this.ABI
        })
        let export_index_path = path.join(process.cwd(), `/types.ts`);
        fs.writeFileSync(export_index_path, this.types_code);

    }

}

function camelCase(input:string) {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}


export default ReducksGenerator;