import {DataItem} from 'ethereum-types';
let Handlebars = require("handlebars");

export const pascalCase = (input:string) => input.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});

export const camelCase = (input:string) => input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '')

Handlebars.registerHelper({
   
    logconsole(){
        let args = Array.prototype.slice.call(arguments);
        console.log(args.splice(args.length -1 ));
    },
    upper(input:string){
        return input.toUpperCase()
    },
    camelCase(input:string) {
        return camelCase(input);
    },
    pascalCase(input: string){
        return pascalCase(input)
    },
    inputList(inputs:DataItem[]){
        return inputs.map(input => input.name !== "" ? input.name : input.type).join(', ');
    },
    inputSpread(inputs:DataItem[]){
        if (inputs.length > 0) return ', '+inputs.map(input => input.name !== "" ? input.name : input.type).join(', ');
        return '';
    },
    solToJSType(input:string){
        return input === 'bool' ? 'boolean' : 'string';
    },
    stringify(input:Object){
        return JSON.stringify(input, null, 2)
    }
});

export default Handlebars