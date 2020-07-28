"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutApiDef = void 0;
const api_1 = require("./api");
const components_1 = require("./components");
exports.checkoutApiDef = {
    components: components_1.components,
    'basePath': '/azam/mock/v1',
    'paths': {
        '/checkout': api_1.azamCheckout,
    }
};
//# sourceMappingURL=index.js.map