"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenComponent = void 0;
exports.tokenComponent = {
    'post': {
        'x-operation-name': 'tokenComponentFunction',
        'requestBody': {
            'content': {
                'application/json': {
                    'schema': {
                        'type': 'object',
                        'title': 'Token Request',
                        'description': 'Sample Token Request',
                        'properties': {
                            'VendorCode': { 'type': 'string' },
                            'PartnerCode': { 'type': 'string' },
                            'IsSuccess': { 'type': 'boolean' },
                        },
                    },
                }
            }
        },
        'responses': {
            '200': {
                'description': 'Token Success Response',
                'content': {
                    'application/json': {
                        'schema': {
                            'type': 'object',
                            'title': 'TokenResponse',
                            'properties': {
                                'success': { 'type': 'boolean' },
                                'responseCode': { 'type': 'string' },
                                'message': { 'type': 'string' },
                                'data': {
                                    'type': 'object',
                                    'properties': {
                                        'Authorization': {
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
                'description': 'Token Failure Response',
                'content': {
                    'application/json': {
                        'schema': {
                            'type': 'object',
                            'title': 'TokenResponse',
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
    },
};
//# sourceMappingURL=azam-token.js.map