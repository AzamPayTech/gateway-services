import { confirmPayment } from './api';
import { components } from './components';

export const confirmPayDef = {
  components,
  'basePath': '/azam/mock/v1',
  'paths': {
    '/confirmpayment': confirmPayment
  }
};
