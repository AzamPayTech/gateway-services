import { tokenComponent } from './api';
import { components } from './components';

export const tokenDef = {
  components,
  'basePath': '/azam/mock/v1',
  'paths': {
    '/token': tokenComponent
  }
};
