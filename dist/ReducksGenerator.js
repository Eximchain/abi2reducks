(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./DucksGenerator", "./handlebars"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DucksGenerator_1 = require("./DucksGenerator");
    var handlebars_1 = require("./handlebars");
    var shell = require('shelljs');
    var path = require("path");
    var fs = require("fs");
    var ReducksGenerator = /** @class */ (function () {
        function ReducksGenerator(_a) {
            var name = _a.name, abi = _a.abi;
            var _this = this;
            this.initReducks = function () {
                // cd into directory and create folder for each ABI method
                shell.mkdir('ducks');
                shell.cd(_this.REDUCKS_DIR);
                shell.touch('reusable.ts');
                _this.writeReducksIndex();
                _this.writeReducksTypes();
                _this.ABI.forEach(function (fxn) {
                    _this.ducksGenerator.writeDuckFolder(camelCase(fxn.name));
                    _this.ducksGenerator.writeDuckIndex(camelCase(fxn.name), fxn);
                    _this.ducksGenerator.writeDuckActions(camelCase(fxn.name), fxn);
                    _this.ducksGenerator.writeDuckReducers(camelCase(fxn.name), fxn);
                    _this.ducksGenerator.writeDuckSelectors(camelCase(fxn.name), fxn);
                    _this.ducksGenerator.writeDuckTypes(camelCase(fxn.name), fxn);
                    _this.ducksGenerator.writeDuckTests(camelCase(fxn.name), fxn);
                });
            };
            this.writeReducksIndex = function () {
                var export_index_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/reducks_export_index_template.hbs")));
                _this.export_index_code = handlebars_1.default.compile(export_index_template)({
                    abi: _this.ABI
                });
                var export_index_path = path.join(process.cwd(), "/index.ts");
                fs.writeFileSync(export_index_path, _this.export_index_code);
            };
            this.writeReducksTypes = function () {
                var types_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/reducks_types_template.hbs")));
                _this.types_code = handlebars_1.default.compile(types_template)({
                    abi: _this.ABI
                });
                var export_index_path = path.join(process.cwd(), "/types.ts");
                fs.writeFileSync(export_index_path, _this.types_code);
            };
            //NOTE: make a duck factory 
            this.ducksGenerator = new DucksGenerator_1.default();
            //NOTE: set default directories, etc.
            this.START_DIR = process.cwd();
            this.REDUCKS_DIR = this.START_DIR + "/ducks";
            //NOTE: store contract details
            this.ABI = abi.filter(function (fxn) { return fxn.type === 'function'; });
            this.CONTRACT_NAME = name;
        }
        ReducksGenerator.prototype.generate = function () {
            shell.cd("" + this.START_DIR);
            this.initReducks();
        };
        return ReducksGenerator;
    }());
    exports.ReducksGenerator = ReducksGenerator;
    function camelCase(input) {
        return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
            return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }
    exports.default = ReducksGenerator;
});
//# sourceMappingURL=ReducksGenerator.js.map