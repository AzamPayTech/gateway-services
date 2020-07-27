export const components = {
  schemas: {
    checkoutComponent: {
      type: 'object',
      parameters: [{
        name: 'Authorization',
        schema: {
          type: 'string',
        },
        in: 'headers',
      }, {
        name: 'SenderMsisdn',
        schema: {
          type: 'string'
        },
        in: 'body',
      }, {
        name: 'ReferenceMsisdn',
        schema: {
          type: 'string'
        },
        in: 'body',
      }, {
        name: 'Amount',
        schema: {
          type: 'string'
        },
        in: 'body',
      }],
    },
  },
};
