import { inject } from '@loopback/context';
import { api, Request, RestBindings } from '@loopback/rest';
import { checkoutApiDef } from '../api-specs/checkout';
import { tokenDef } from '../api-specs/token';
import { confirmPayDef } from '../api-specs/confirm-payment';
import callRequest from '../common/CallRequest';

@api(checkoutApiDef)
export class CheckoutController {
  constructor() { }

  async checkoutComponentFunction(
    @inject(RestBindings.Http.REQUEST)
    request: Request
  ): Promise<any> {
    const { body }: any = request;
    const refId = new Date()
    let response: any = {};
    body?.IsSuccess ?
      response = {
        success: true,
        responseCode: 200,
        message: 'This is a successfull transaction',
        data: {
          ReferenceID: refId
        }
      } :
      response = {
        success: false,
        responseCode: 500,
        message: 'Internal server error',
        data: {}
      };
    // TODO::
    // Check if all required fields exist then give success confirm route response otherwise just fail it. 
    const options: any = {
      url: 'https://uat.evirtualpay.com:8443/confirmPayment/Pay',
      body: {
      },
      json: true,
      method: 'POST',
      rejectUnauthorized: false,
    };
    options.body.TransactionStatus = 'Success';
    options.body.Message = 'This transaction is successful';
    options.body.Operator = 'Tigo';
    options.body.ReferenceID = refId;
    options.body.UtilityReference = body.ReferenceMsisdn;
    options.body.TansactionID = new Date().toISOString;
    if (body.Amount) {
      options.body.Amount = body.Amount;
    }
    if (body.Msisdn) {
      options.body.Msisdn = body.Msisd;
    }
    if (body.ReferenceMsisdn) {
      options.body.UtilityReference = body.ReferenceMsisdn;
    }
     else {
      response = {
        success: false,
        responseCode: 400,
        message: 'Bad request',
        data: {}
      };
    }
    setTimeout(async () => {
      await callRequest(options);
    }, 2000);
    return response;
  }
}

@api(tokenDef)
export class TokenController {
  constructor() { }

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
  constructor() { }

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