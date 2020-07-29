import { inject } from '@loopback/context';
import { api, Request, RestBindings } from '@loopback/rest';
import { checkoutApiDef } from '../api-specs/checkout';
import { tokenDef } from '../api-specs/token';
import { confirmPayDef } from '../api-specs/confirm-payment';
import callRequest from '../common/CallRequest';

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
    // TODO::
    // Check if all required fields exist then give success confirm route response otherwise just fail it. 
    const options: any = {
      url: 'https://uat.evirtualpay.com:8443/confirmPayment/Pay',
      body: {
        transactionstatus: body?.TransactionStatus,
        message: body?.Message,
        operator: body?.Operator,
        reference: body?.ReferenceID,
        utilityref: body?.UtilityReference,
        amount: body?.Amount,
        transid: body?.TansactionID,
        msisdn: body?.Msisdn
      },
      json: true,
      method: 'POST',
      rejectUnauthorized: false,
    };
    if (body.TransactionStatus) {
      options.body.TransactionStatus = body.TransactionStatus;
    }
    if (body.Message) {
      options.body.Message = body.Message;
    }
    if (body.Operator) {
      options.body.Operator = body.Operator;
    }
    if (body.ReferenceID) {
      options.body.ReferenceID = body.ReferenceID;
    }
    if (body.UtilityReference) {
      options.body.UtilityReference = body.UtilityReference;
    }
    if (body.Amount) {
      options.body.Amount = body.Amount;
    }
    if (body.TansactionID) {
      options.body.TansactionID = body.TansactionID;
    }
    if (body.Msisdn) {
      options.body.Msisdn = body.Msisd;
    } else {
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