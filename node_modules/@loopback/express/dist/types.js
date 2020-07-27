"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/express
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIDDLEWARE_CONTEXT = exports.DEFAULT_MIDDLEWARE_CHAIN = exports.MiddlewareChain = exports.MiddlewareContext = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const on_finished_1 = tslib_1.__importDefault(require("on-finished"));
const keys_1 = require("./keys");
var express_1 = require("express");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
/**
 * A per-request Context for middleware to combine an IoC container with handler
 * context (request, response, etc.).
 */
class MiddlewareContext extends core_1.Context {
    /**
     * Constructor for `MiddlewareContext`
     * @param request - Express request object
     * @param response - Express response object
     * @param parent - Parent context
     * @param name - Name of the middleware context
     */
    constructor(request, response, parent, name) {
        super(parent, name);
        this.request = request;
        this.response = response;
        this.setupBindings();
        on_finished_1.default(this.response, () => {
            // Close the request context when the http response is finished so that
            // it can be recycled by GC
            this.emit('close');
            this.close();
        });
    }
    setupBindings() {
        this.bind(keys_1.MiddlewareBindings.CONTEXT).to(this).lock();
    }
}
exports.MiddlewareContext = MiddlewareContext;
/**
 * An interceptor chain of middleware. This represents a list of cascading
 * middleware functions to be executed by the order of `group` names.
 */
class MiddlewareChain extends core_1.GenericInterceptorChain {
}
exports.MiddlewareChain = MiddlewareChain;
/**
 * Default extension point name for middleware
 */
exports.DEFAULT_MIDDLEWARE_CHAIN = 'middlewareChain.default';
/**
 * A symbol to store `MiddlewareContext` on the request object
 */
exports.MIDDLEWARE_CONTEXT = Symbol('loopback.middleware.context');
//# sourceMappingURL=types.js.map