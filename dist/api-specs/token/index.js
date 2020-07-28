"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenDef = void 0;
const api_1 = require("./api");
const components_1 = require("./components");
exports.tokenDef = {
    components: components_1.components,
    'basePath': '/azam/mock/v1',
    'paths': {
        '/token': api_1.tokenComponent
    }
};
//# sourceMappingURL=index.js.map