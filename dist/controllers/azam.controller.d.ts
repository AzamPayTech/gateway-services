/// <reference types="express" />
import { Request } from '@loopback/rest';
export declare class CheckoutController {
    constructor();
    checkoutComponentFunction(request: Request): Promise<any>;
}
export declare class TokenController {
    constructor();
    tokenComponentFunction(request: Request): Promise<any>;
}
export declare class ConfirmPaymentController {
    constructor();
    paymentComponentFunction(request: Request): Promise<any>;
}
