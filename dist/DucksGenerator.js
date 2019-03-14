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
    var fs = require("fs");
    var DucksGenerator = /** @class */ (function () {
        function DucksGenerator() {
            var _this = this;
            this.writeDuckFolder = function (name) {
                shell.mkdir(name);
            };
            this.writeDuckIndex = function (name, method) {
                shell.cd(name);
                var ducks_index_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_index_template.hbs")));
                _this.duck_index_code = handlebars_1.default.compile(ducks_index_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_index_path = path.join(process.cwd(), "/index.ts");
                fs.writeFileSync(duck_index_path, _this.duck_index_code);
                shell.cd('..');
            };
            this.writeDuckActions = function (name, method) {
                shell.cd(name);
                var ducks_actions_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_actions_template.hbs")));
                _this.duck_actions_code = handlebars_1.default.compile(ducks_actions_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_actions_path = path.join(process.cwd(), "/actions.ts");
                fs.writeFileSync(duck_actions_path, _this.duck_actions_code);
                shell.cd('..');
            };
            this.writeDuckReducers = function (name, method) {
                shell.cd(name);
                var ducks_reducers_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_reducers_template.hbs")));
                _this.duck_reducers_code = handlebars_1.default.compile(ducks_reducers_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_reducers_path = path.join(process.cwd(), "/reducers.ts");
                fs.writeFileSync(duck_reducers_path, _this.duck_reducers_code);
                shell.cd('..');
            };
            this.writeDuckSelectors = function (name, method) {
                shell.cd(name);
                var ducks_selectors_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_selectors_template.hbs")));
                _this.duck_selectors_code = handlebars_1.default.compile(ducks_selectors_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_selectors_path = path.join(process.cwd(), "/selectors.ts");
                fs.writeFileSync(duck_selectors_path, _this.duck_selectors_code);
                shell.cd('..');
            };
            this.writeDuckTypes = function (name, method) {
                shell.cd(name);
                var ducks_types_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_types_template.hbs")));
                _this.duck_types_code = handlebars_1.default.compile(ducks_types_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_types_path = path.join(process.cwd(), "/types.ts");
                fs.writeFileSync(duck_types_path, _this.duck_types_code);
                shell.cd('..');
            };
            this.writeDuckTests = function (name, method) {
                shell.cd(name);
                var ducks_tests_template = String(fs.readFileSync(path.resolve(__dirname, "./templates/duck_tests_template.hbs")));
                _this.duck_tests_code = handlebars_1.default.compile(ducks_tests_template)({
                    methodName: name,
                    methodAbi: method
                });
                var duck_tests_path = path.join(process.cwd(), "/tests.ts");
                fs.writeFileSync(duck_tests_path, _this.duck_tests_code);
                shell.cd('..');
            };
        }
        return DucksGenerator;
    }());
    exports.default = DucksGenerator;
});
//# sourceMappingURL=DucksGenerator.js.map