import { inject } from '@loopback/context';
import { api, Request, RestBindings } from '@loopback/rest';
import { checkoutApiDef } from '../api-specs/checkout';
import { tokenDef } from '../api-specs/token';
import { confirmPayDef } from '../api-specs/confirm-payment';

@api(checkoutApiDef)
export class CheckoutController {
  constructor () { }

  async checkoutComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    let response: any = {};
    body?.IsSuccess ?
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
    return response;
  }
}

@api(tokenDef)
export class TokenController {
  constructor () { }

  async tokenComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    let response: any = {};
    body?.IsSuccess ?
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
}


@api(confirmPayDef)
export class ConfirmPaymentController {
  constructor () { }

  async paymentComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    let response: any = {};
    body?.IsSuccess ?
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
}