"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require('request-promise');
async function callRequest(options) {
    // eslint-disable-next-line @typescript-eslint/return-await
    options.rejectUnAuthorized = false;
    return rp(options)
        .then((response) => {
        console.log("in reposne=====", response);
        if (response) {
            return {
                success: true,
                message: 'Response retrieved successfully',
                data: response,
            };
        }
        else {
            return {
                success: false,
                message: 'Something went wrong. No data found',
                data: {},
            };
        }
    })
        .catch((err) => {
        console.log("in acthc------", err);
        return {
            success: false,
            message: 'Something went wrong while requesting',
            data: err,
        };
    });
}
exports.default = callRequest;
//# sourceMappingURL=CallRequest.js.map