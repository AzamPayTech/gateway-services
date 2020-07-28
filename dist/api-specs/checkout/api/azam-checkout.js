"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.azamCheckout = void 0;
exports.azamCheckout = {
    'post': {
        'x-operation-name': 'checkoutComponentFunction',
        'requestBody': {
            'content': {
                'application/json': {
                    'schema': {
                        'type': 'object',
                        'title': 'Checkout Request',
                        'description': 'Sample Checkout Request',
                        'properties': {
                            'SenderMsisdn': { 'type': 'string' },
                            'ReferenceMsisdn': { 'type': 'string' },
                            'Amount': { 'type': 'string' },
                            'IsSuccess': { 'type': 'boolean' },
                        },
                    },
                }
            }
        },
        'responses': {
            '200': {
                'description': 'Checkout Success Response',
                'content': {
                    'application/json': {
                        'schema': {
                            'type': 'object',
                            'title': 'CheckoutResponse',
                            'properties': {
                                'success': { 'type': 'boolean' },
                                'responseCode': { 'type': 'string' },
                                'message': { 'type': 'string' },
                                'data': {
                                    'type': 'object',
                                    'properties': {
                                        'ReferenceID': {
                                            'type': 'string',
                                            'value': new Date(),
                                        }
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '500': {
                'description': 'Checkout Failure Response',
                'content': {
                    'application/json': {
                        'schema': {
                            'type': 'object',
                            'title': 'CheckoutResponse',
                            'properties': {
                                'success': { 'type': 'boolean', 'value': false },
                                'responseCode': { 'type': 'string', 'value': '500' },
                                'message': { 'type': 'string', 'value': 'Internal server error' },
                                'data': { 'type': 'object', 'value': {} },
                            },
                        },
                    },
                },
            },
        },
    }
};
//# sourceMappingURL=azam-checkout.js.map