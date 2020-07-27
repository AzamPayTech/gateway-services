import { azamCheckout } from './api';
import { components } from './components';

export const checkoutApiDef = {
  components,
  'basePath': '/azam/mock/v1',
  'paths': {
    '/checkout': azamCheckout,
  }
};
