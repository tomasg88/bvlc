"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIncompatiblePluginDialog = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var IncompatiblePlugin_1 = require("./IncompatiblePlugin");
var incompatiblePlugins = [];
var debounceRenderIncompatiblePlugins = debounce(renderIncompatiblePlugins);
function showIncompatiblePluginDialog(plugin) {
    incompatiblePlugins.push(plugin);
    debounceRenderIncompatiblePlugins();
    // render an empty background
    return function () { return null; };
}
exports.showIncompatiblePluginDialog = showIncompatiblePluginDialog;
function renderIncompatiblePlugins() {
    if (!incompatiblePlugins.length) {
        return;
    }
    requestAnimationFrame(function () {
        var id = 'v2-incompatible-plugins-dialog';
        var existingContainer = document.querySelector("#".concat(id));
        if (existingContainer) {
            // hotreload
            (0, react_dom_1.unmountComponentAtNode)(existingContainer);
            existingContainer.remove();
        }
        var container = document.createElement('div');
        container.setAttribute('id', id);
        document.body.appendChild(container);
        (0, react_dom_1.render)(react_1.default.createElement(IncompatiblePlugin_1.IncompatiblePlugins, { plugins: incompatiblePlugins }), container);
    });
}
function debounce(func, timeout) {
    if (timeout === void 0) { timeout = 300; }
    var timer = 0;
    return function () {
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { return func(); }, timeout);
    };
}
//# sourceMappingURL=register-plugin.js.map