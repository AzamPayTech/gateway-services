export const components = {
  schemas: {
    confirmPaymentComponent: {
      type: 'object',
      title: 'Checkout Request',
      description: 'Sample Checkout Request',
      properties: {
        VendorCode: { type: 'string' },
        PartnerCode: { type: 'string' },
      },
    },
  },
};
