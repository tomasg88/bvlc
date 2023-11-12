"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncompatiblePlugins = void 0;
var react_1 = __importStar(require("react"));
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var icons_1 = require("@sanity/icons");
function IncompatiblePlugins(props) {
    var plugins = props.plugins;
    var pluginsWithLinks = plugins.filter(function (p) { return !!p.sanityExchangeUrl; });
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            fontFamily: 'arial',
            width: '100%',
            height: '100%',
        } },
        react_1.default.createElement("div", { style: { maxWidth: 800, padding: 20, margin: 'auto', border: '1px solid grey' } },
            react_1.default.createElement("h2", { style: { margin: 0, marginBottom: 5, fontSize: '1.2em' } },
                "Incompatible plugin",
                plugins.length > 1 ? 's' : ''),
            react_1.default.createElement("div", null,
                "The following",
                plugins.length > 1 ? ' plugins are ' : ' plugin is ',
                " incompatible with this Sanity Studio v2:"),
            react_1.default.createElement("div", { style: { marginTop: '10px' } }, plugins.map(function (p) { return (react_1.default.createElement("div", { key: p.name, style: { marginBottom: '10px' } },
                react_1.default.createElement("div", { style: { marginRight: '10px' } },
                    react_1.default.createElement("strong", null,
                        react_1.default.createElement("span", { style: { color: '#C3362C' } }, p.name))),
                react_1.default.createElement("div", null,
                    "Version: ",
                    react_1.default.createElement("span", { style: { color: '#C3362C' } }, p.versions.v3)))); })),
            react_1.default.createElement("div", null,
                plugins.length > 1 ? 'These are' : 'It is',
                " built for",
                ' ',
                react_1.default.createElement("a", { href: "https://www.sanity.io/studio-v3" }, "Sanity Studio v3"),
                "."),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { style: { margin: 0, marginBottom: 5, marginTop: 20, fontSize: '1.2em' } }, "Resolve the issue"),
                react_1.default.createElement(DowngradablePlugins, { plugins: plugins }),
                react_1.default.createElement("span", { style: { margin: 10 } },
                    react_1.default.createElement(RemovePlugins, { plugins: plugins })),
                react_1.default.createElement("div", null, "... and then restart the Studio."),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h2", { style: { margin: 0, marginBottom: 5, marginTop: 20, fontSize: '1.2em' } }, "More information"),
                    pluginsWithLinks.length > 0 && (react_1.default.createElement("div", null, pluginsWithLinks.map(function (p) { return (react_1.default.createElement("div", { key: p.name },
                        p.name,
                        " on ",
                        react_1.default.createElement("a", { href: p.sanityExchangeUrl }, "Sanity Exchange"))); }))),
                    react_1.default.createElement("div", { style: { marginTop: 20 } },
                        react_1.default.createElement("a", { href: "https://beta.sanity.io/docs/platform/studio/v2-to-v3" }, "About Sanity Studio versions")))))));
}
exports.IncompatiblePlugins = IncompatiblePlugins;
function DowngradablePlugins(props) {
    var plugins = props.plugins.filter(function (p) { return !!p.versions.v2; });
    if (!plugins.length) {
        return null;
    }
    var yarnCommand = "yarn add ".concat(plugins.map(function (p) { return "".concat(p.name, "@").concat(p.versions.v2); }).join(' '));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { marginBottom: 10 } },
            "Downgrade the plugin",
            plugins.length > 1 ? 's' : '',
            " by running this command in the Studio directory:"),
        react_1.default.createElement(Command, { command: yarnCommand })));
}
function RemovePlugins(props) {
    var plugins = props.plugins.filter(function (p) { return !p.versions.v2; });
    if (!plugins.length) {
        return null;
    }
    var uninstallCommand = plugins.map(function (p) { return "sanity uninstall ".concat(p.name); }).join(' && ');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { marginBottom: 10 } },
            "Uninstall the plugin",
            plugins.length > 1 ? 's' : '',
            " by running this command in the Studio directory:"),
        react_1.default.createElement(Command, { command: uninstallCommand })));
}
function Command(_a) {
    var command = _a.command;
    var _b = __read(useCopy(), 2), copied = _b[0], handleCopy = _b[1];
    return (react_1.default.createElement("div", { style: {
            background: '#e1e3e5',
            padding: 20,
            border: '1px solid lightgrey',
            display: 'flex',
            justifyContent: 'space-between',
        } },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: {
                    color: '#101112FF',
                    overflowX: 'auto',
                    height: '2.5em',
                    fontFamily: 'monospace',
                    display: 'flex',
                    alignItems: 'center',
                } }, command)),
        react_1.default.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: command, onCopy: handleCopy },
            react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "button", style: { display: 'flex', alignItems: 'center', gap: 5, height: 35, width: 35 }, title: "Copy to clipboard" }, copied ? (react_1.default.createElement(icons_1.CheckmarkIcon, { width: 25, height: 25 })) : (react_1.default.createElement(icons_1.ClipboardIcon, { width: 25, height: 25 })))))));
}
function useCopy() {
    var _a = __read((0, react_1.useState)(false), 2), copied = _a[0], setCopied = _a[1];
    var handleCopy = (0, react_1.useCallback)(function () {
        setCopied(true);
        var timeout = setTimeout(function () {
            setCopied(false);
        }, 1000);
        return function () {
            clearTimeout(timeout);
        };
    }, [setCopied]);
    return [copied, handleCopy];
}
//# sourceMappingURL=IncompatiblePlugin.js.map