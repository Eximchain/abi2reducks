(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./handlebars"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var handlebars_1 = require("./handlebars");
    var shell = require('shelljs');
    var path = require("path");
    var fs = require("fs-extra");
    var _a = require('./util'), writeTemplateToPath = _a.writeTemplateToPath, writeTxDuck = _a.writeTxDuck;
    var getReducksData = function (_a) {
        var abi = _a.abi, address = _a.address, web3URL = _a.web3URL;
        var cwd = process.cwd();
        return {
            START_DIR: cwd,
            REDUCKS_DIR: cwd + "/txDucks",
            ABI: abi.filter(function (fxn) { return fxn.type === 'function'; }),
            REUSABLE_DIR: path.resolve(__dirname, '../src/reusable'),
            CONTRACT_ADDR: address,
            WEB3_URL: web3URL
        };
    };
    exports.generate = function (input) {
        var data = getReducksData(input);
        shell.cd(data.START_DIR);
        // cd into directory and create folder for each ABI method
        writeTemplateToPath('./templates/state_index.hbs', './index.ts');
        writeTemplateToPath('./templates/store.hbs', './store.ts');
        writeTemplateToPath('./templates/contract.hbs', './Contract.ts', {
            abi: data.ABI,
            web3URL: data.WEB3_URL,
            contractAddress: data.CONTRACT_ADDR
        });
        fs.copySync(data.REUSABLE_DIR, path.resolve(process.cwd(), './reusable'));
        fs.ensureDirSync(data.REDUCKS_DIR);
        shell.cd(data.REDUCKS_DIR);
        writeTemplateToPath('./templates/ducks_index.hbs', './index.ts', { abi: data.ABI });
        data.ABI.forEach(function (fxn) { return writeTxDuck(fxn); });
    };
    var ReducksGenerator = /** @class */ (function () {
        function ReducksGenerator(_a) {
            var abi = _a.abi, address = _a.address, web3URL = _a.web3URL;
            this.initReducks = function () {
            };
            this.writeTxDuck = function (method) {
                var dirName = handlebars_1.camelCase(method.name);
                fs.ensureDirSync(dirName);
                shell.cd(dirName);
                var templateArg = {
                    methodName: method.name,
                    methodAbi: method,
                    titleName: handlebars_1.pascalCase(method.name)
                };
                writeTemplateToPath('./templates/duck/index.hbs', './index.ts', templateArg);
                writeTemplateToPath('./templates/duck/actions.hbs', './actions.ts', templateArg);
                writeTemplateToPath('./templates/duck/reducers.hbs', './reducers.ts', templateArg);
                writeTemplateToPath('./templates/duck/selectors.hbs', './selectors.ts', templateArg);
                writeTemplateToPath('./templates/duck/types.hbs', './types.ts', templateArg);
                shell.cd('..');
            };
            this.START_DIR = process.cwd();
            this.REDUCKS_DIR = this.START_DIR + "/txDucks";
            this.ABI = abi.filter(function (fxn) { return fxn.type === 'function'; });
            this.REUSABLE_DIR = path.resolve(__dirname, '../src/reusable');
            this.CONTRACT_ADDR = address;
            this.WEB3_URL = web3URL;
        }
        ReducksGenerator.prototype.generate = function () {
            shell.cd("" + this.START_DIR);
            this.initReducks();
        };
        return ReducksGenerator;
    }());
    exports.ReducksGenerator = ReducksGenerator;
    exports.default = { generate: exports.generate };
});
//# sourceMappingURL=ReducksGenerator.js.map