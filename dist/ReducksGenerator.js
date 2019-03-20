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
    var writeTemplateToPath = require('./util').writeTemplateToPath;
    var ReducksGenerator = /** @class */ (function () {
        function ReducksGenerator(_a) {
            var name = _a.name, abi = _a.abi;
            var _this = this;
            this.initReducks = function () {
                // cd into directory and create folder for each ABI method
                writeTemplateToPath('./templates/state_index.hbs', './index.ts');
                writeTemplateToPath('./templates/store.hbs', './store.ts');
                writeTemplateToPath('./templates/contract.hbs', './Contract.ts', {
                    abi: _this.ABI,
                    // TODO: Hook up an environment variable generator so this isn't hardcoded
                    web3URL: 'https://gamma-tx-executor-us-east.eximchain-dev.com'
                });
                fs.copySync(_this.REUSABLE_DIR, path.resolve(process.cwd(), './reusable'));
                fs.ensureDirSync(_this.REDUCKS_DIR);
                shell.cd(_this.REDUCKS_DIR);
                writeTemplateToPath('./templates/ducks_index.hbs', './index.ts', { abi: _this.ABI });
                _this.ABI.forEach(function (fxn) { return _this.writeTxDuck(fxn); });
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
            this.CONTRACT_NAME = name;
            this.REUSABLE_DIR = path.resolve(__dirname, '../src/reusable');
        }
        ReducksGenerator.prototype.generate = function () {
            shell.cd("" + this.START_DIR);
            this.initReducks();
        };
        return ReducksGenerator;
    }());
    exports.ReducksGenerator = ReducksGenerator;
    exports.default = ReducksGenerator;
});
//# sourceMappingURL=ReducksGenerator.js.map