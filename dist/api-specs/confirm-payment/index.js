"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPayDef = void 0;
const api_1 = require("./api");
const components_1 = require("./components");
exports.confirmPayDef = {
    components: components_1.components,
    'basePath': '/azam/mock/v1',
    'paths': {
        '/confirmpayment': api_1.confirmPayment
    }
};
//# sourceMappingURL=index.js.map