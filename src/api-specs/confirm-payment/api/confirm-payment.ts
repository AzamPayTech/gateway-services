export const confirmPayment: any = {
  'post': {
    'x-operation-name': 'paymentComponentFunction',
    'requestBody': {
      'content': {
        'application/json': {
          'schema': {
            'type': 'object',
            'title': 'Confirmation Paymentment Request',
            'description': 'Sample Confirmation Paymentment Request',
            'properties': {
              'IsSuccess': { 'type': 'boolean' },
            },
          },
        },
      },
    },
    'responses': {
      '200': {
        'description': 'Confirmation Paymentment Success Response',
        'content': {
          'application/json': {
            'schema': {
              'type': 'object',
              'title': 'Confirmation PaymentResponsement',
              'properties': {
                'success': { 'type': 'boolean' },
                'responseCode': { 'type': 'string' },
                'message': { 'type': 'string' },
                'data': {
                  'type': 'object',
                  'properties': {
                    'operator': {
                      'type': 'string',
                      'value': 'Airtel',
                    },
                    'reference': {
                      'type': 'string',
                      'value': new Date(),
                    },
                    'utilityref': {
                      'type': 'string',
                      'value': new Date(),
                    },
                    'amount': {
                      'type': 'string',
                      'value': '1000',
                    },
                    'transid': {
                      'type': 'string',
                      'value': new Date(),
                    },
                    'msisdn': {
                      'type': 'string',
                      'value': new Date(),
                    },
                  },
                },
              },
            },
          },
        },
      },
      '500': {
        'description': 'Confirmation Paymentment Failure Response',
        'content': {
          'application/json': {
            'schema': {
              'type': 'object',
              'title': 'Confirmation PaymentResponsement',
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
