export const components = {
  schemas: {
    tokenComponent: {
      type: 'object',
      title: 'Token Request',
      description: 'Sample Token Request',
      properties: {
        VendorCode: { type: 'string' },
        PartnerCode: { type: 'string' },
      },
    },
  },
};
