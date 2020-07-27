import { Binding, Provider } from '@loopback/core';
import { ExpressRequestHandler, InvokeMiddleware, InvokeMiddlewareOptions, MiddlewareContext } from '../types';
/**
 * Extension point for middleware to be run as part of the sequence actions
 */
export declare class InvokeMiddlewareProvider implements Provider<InvokeMiddleware> {
    /**
     * Inject the binding so that we can access `extensionPoint` tag
     */
    protected binding: Binding<InvokeMiddleware>;
    /**
     * Default options for invoking the middleware chain
     */
    protected defaultOptions: InvokeMiddlewareOptions;
    value(): InvokeMiddleware;
    action(middlewareCtx: MiddlewareContext, optionsOrHandlers?: InvokeMiddlewareOptions | ExpressRequestHandler[]): Promise<any>;
}
