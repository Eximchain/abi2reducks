
import {MethodAbi} from 'ethereum-types';
import Handlebars from './handlebars'
const shell = require('shelljs');
let path = require("path");
let fs = require("fs");

class DucksGenerator {

    private duck_index_code:any;
    private duck_actions_code:any;
    private duck_reducers_code:any;
    private duck_selectors_code:any;
    private duck_types_code:any;
    private duck_tests_code:any;

    // TODO: Refactor to account for new templateDuck

    public writeDuckFolder = (name:string) =>{
        shell.mkdir(name)
    }

    public writeDuckIndex = (name:string, method:MethodAbi) => {
        
        shell.cd(name);

        let ducks_index_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_index_template.hbs")));
        this.duck_index_code = Handlebars.compile(ducks_index_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_index_path = path.join(process.cwd(), `/index.ts`);
        fs.writeFileSync(duck_index_path, this.duck_index_code);
        shell.cd('..')
    }
    public writeDuckActions = (name:string, method:MethodAbi) => {
        shell.cd(name);

        let ducks_actions_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_actions_template.hbs")));
        this.duck_actions_code = Handlebars.compile(ducks_actions_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_actions_path = path.join(process.cwd(), `/actions.ts`);
        fs.writeFileSync(duck_actions_path, this.duck_actions_code);
        shell.cd('..')
    }
    public writeDuckReducers = (name:string, method:MethodAbi) => {
        shell.cd(name);

        let ducks_reducers_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_reducers_template.hbs")));
        this.duck_reducers_code = Handlebars.compile(ducks_reducers_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_reducers_path = path.join(process.cwd(), `/reducers.ts`);
        fs.writeFileSync(duck_reducers_path, this.duck_reducers_code);
        shell.cd('..')
    }
    public writeDuckSelectors = (name:string, method:MethodAbi) => {
        shell.cd(name);

        let ducks_selectors_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_selectors_template.hbs")));
        this.duck_selectors_code = Handlebars.compile(ducks_selectors_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_selectors_path = path.join(process.cwd(), `/selectors.ts`);
        fs.writeFileSync(duck_selectors_path, this.duck_selectors_code);
        shell.cd('..')
    }
    public writeDuckTypes = (name:string, method:MethodAbi) => {
        shell.cd(name);

        let ducks_types_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_types_template.hbs")));
        this.duck_types_code = Handlebars.compile(ducks_types_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_types_path = path.join(process.cwd(), `/types.ts`);
        fs.writeFileSync(duck_types_path, this.duck_types_code);
        shell.cd('..')
    }
    public writeDuckTests = (name:string, method:MethodAbi) => {
        shell.cd(name);

        let ducks_tests_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_tests_template.hbs")));
        this.duck_tests_code = Handlebars.compile(ducks_tests_template)({
            methodName : name, 
            methodAbi: method
        })
        let duck_tests_path = path.join(process.cwd(), `/tests.ts`);
        fs.writeFileSync(duck_tests_path, this.duck_tests_code);
        shell.cd('..')
    }
}

export default DucksGenerator;