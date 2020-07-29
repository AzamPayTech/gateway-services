"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmPaymentController = exports.TokenController = exports.CheckoutController = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const checkout_1 = require("../api-specs/checkout");
const token_1 = require("../api-specs/token");
const confirm_payment_1 = require("../api-specs/confirm-payment");
const CallRequest_1 = tslib_1.__importDefault(require("../common/CallRequest"));
let CheckoutController = class CheckoutController {
    constructor() { }
    async checkoutComponentFunction(request) {
        const { body } = request;
        let response = {};
        (body === null || body === void 0 ? void 0 : body.IsSuccess) ?
            response = {
                success: true,
                responseCode: 200,
                message: 'This is a successfull transaction',
                data: {
                    ReferenceID: new Date()
                }
            } :
            response = {
                success: false,
                responseCode: 500,
                message: 'Internal server error',
                data: {}
            };
        // TODO::
        // Check if all required fields exist then give success confirm route response otherwise just fail it. 
        const options = {
            url: 'https://uat.evirtualpay.com:8443/confirmPayment/Pay',
            body: {
                transactionstatus: body === null || body === void 0 ? void 0 : body.TransactionStatus,
                message: body === null || body === void 0 ? void 0 : body.Message,
                operator: body === null || body === void 0 ? void 0 : body.Operator,
                reference: body === null || body === void 0 ? void 0 : body.ReferenceID,
                utilityref: body === null || body === void 0 ? void 0 : body.UtilityReference,
                amount: body === null || body === void 0 ? void 0 : body.Amount,
                transid: body === null || body === void 0 ? void 0 : body.TansactionID,
                msisdn: body === null || body === void 0 ? void 0 : body.Msisdn
            },
            json: true,
            method: 'POST',
            rejectUnauthorized: false,
        };
        if (body.TransactionStatus) {
            options.body.TransactionStatus = body.TransactionStatus;
        }
        if (body.Message) {
            options.body.Message = body.Message;
        }
        if (body.Operator) {
            options.body.Operator = body.Operator;
        }
        if (body.ReferenceID) {
            options.body.ReferenceID = body.ReferenceID;
        }
        if (body.UtilityReference) {
            options.body.UtilityReference = body.UtilityReference;
        }
        if (body.Amount) {
            options.body.Amount = body.Amount;
        }
        if (body.TansactionID) {
            options.body.TansactionID = body.TansactionID;
        }
        if (body.Msisdn) {
            options.body.Msisdn = body.Msisd;
        }
        else {
            response = {
                success: false,
                responseCode: 400,
                message: 'Bad request',
                data: {}
            };
        }
        setTimeout(async () => {
            await CallRequest_1.default(options);
        }, 2000);
        return response;
    }
};
tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CheckoutController.prototype, "checkoutComponentFunction", null);
CheckoutController = tslib_1.__decorate([
    rest_1.api(checkout_1.checkoutApiDef),
    tslib_1.__metadata("design:paramtypes", [])
], CheckoutController);
exports.CheckoutController = CheckoutController;
let TokenController = class TokenController {
    constructor() { }
    async tokenComponentFunction(request) {
        const { body } = request;
        let response = {};
        (body === null || body === void 0 ? void 0 : body.IsSuccess) ?
            response = {
                success: true,
                responseCode: 200,
                message: 'Token successfully generated',
                data: {
                    Authorization: new Date()
                }
            } :
            response = {
                success: false,
                responseCode: 500,
                message: 'Internal server error',
                data: {}
            };
        return response;
    }
};
tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TokenController.prototype, "tokenComponentFunction", null);
TokenController = tslib_1.__decorate([
    rest_1.api(token_1.tokenDef),
    tslib_1.__metadata("design:paramtypes", [])
], TokenController);
exports.TokenController = TokenController;
let ConfirmPaymentController = class ConfirmPaymentController {
    constructor() { }
    async paymentComponentFunction(request) {
        const { body } = request;
        let response = {};
        (body === null || body === void 0 ? void 0 : body.IsSuccess) ?
            response = {
                success: true,
                responseCode: 200,
                message: 'Token successfully generated',
                data: {
                    operator: 'Airtel',
                    reference: new Date(),
                    utilityref: new Date(),
                    amount: '1000',
                    transid: new Date(),
                    msisdn: new Date(),
                }
            } :
            response = {
                success: false,
                responseCode: 500,
                message: 'Internal server error',
                data: {}
            };
        return response;
    }
};
tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfirmPaymentController.prototype, "paymentComponentFunction", null);
ConfirmPaymentController = tslib_1.__decorate([
    rest_1.api(confirm_payment_1.confirmPayDef),
    tslib_1.__metadata("design:paramtypes", [])
], ConfirmPaymentController);
exports.ConfirmPaymentController = ConfirmPaymentController;
//# sourceMappingURL=azam.controller.js.map