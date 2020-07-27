"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/express
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeMiddlewareProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const debug_1 = tslib_1.__importDefault(require("debug"));
const keys_1 = require("../keys");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const debug = debug_1.default('loopback:rest:middleware');
/**
 * Extension point for middleware to be run as part of the sequence actions
 */
let InvokeMiddlewareProvider = class InvokeMiddlewareProvider {
    constructor() {
        /**
         * Default options for invoking the middleware chain
         */
        this.defaultOptions = {
            chain: types_1.DEFAULT_MIDDLEWARE_CHAIN,
            orderedGroups: ['cors', 'apiSpec', keys_1.DEFAULT_MIDDLEWARE_GROUP],
        };
    }
    value() {
        debug('Binding', this.binding);
        return (middlewareCtx, optionsOrHandlers) => {
            var _a, _b;
            if (Array.isArray(optionsOrHandlers)) {
                return this.action(middlewareCtx, optionsOrHandlers);
            }
            const options = optionsOrHandlers;
            let chain = options === null || options === void 0 ? void 0 : options.chain;
            const orderedGroups = options === null || options === void 0 ? void 0 : options.orderedGroups;
            chain = (_b = chain !== null && chain !== void 0 ? chain : (_a = this.binding) === null || _a === void 0 ? void 0 : _a.tagMap[core_1.CoreTags.EXTENSION_POINT]) !== null && _b !== void 0 ? _b : this.defaultOptions.chain;
            return this.action(middlewareCtx, {
                ...options,
                chain,
                orderedGroups: orderedGroups !== null && orderedGroups !== void 0 ? orderedGroups : this.defaultOptions.orderedGroups,
            });
        };
    }
    async action(middlewareCtx, optionsOrHandlers) {
        if (Array.isArray(optionsOrHandlers)) {
            return middleware_1.invokeExpressMiddleware(middlewareCtx, ...optionsOrHandlers);
        }
        return middleware_1.invokeMiddleware(middlewareCtx, optionsOrHandlers);
    }
};
tslib_1.__decorate([
    core_1.inject.binding(),
    tslib_1.__metadata("design:type", core_1.Binding)
], InvokeMiddlewareProvider.prototype, "binding", void 0);
tslib_1.__decorate([
    core_1.config(),
    tslib_1.__metadata("design:type", Object)
], InvokeMiddlewareProvider.prototype, "defaultOptions", void 0);
InvokeMiddlewareProvider = tslib_1.__decorate([
    core_1.extensionPoint(types_1.DEFAULT_MIDDLEWARE_CHAIN)
], InvokeMiddlewareProvider);
exports.InvokeMiddlewareProvider = InvokeMiddlewareProvider;
//# sourceMappingURL=invoke-middleware.provider.js.map