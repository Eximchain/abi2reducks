import {DataItem} from 'ethereum-types';
let Handlebars = require("handlebars");



Handlebars.registerHelper({
   
    logconsole(){
        let args = Array.prototype.slice.call(arguments);
        console.log(args.splice(args.length -1 ));
    },
    upper(input:string){
        return input.toUpperCase()
    },
    camelCase(input:string) {
        return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
          return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    },
    pascalCase(input: string){
        return input.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
    },
    inputList(inputs:DataItem[]){
        return inputs.map(input => input.name !== "" ? input.name : input.type).join(', ');
    },
    inputSpread(inputs:DataItem[]){
        if (inputs.length > 0) return ', '+inputs.map(input => input.name !== "" ? input.name : input.type).join(', ');
        return '';
    }
});

export default Handlebars