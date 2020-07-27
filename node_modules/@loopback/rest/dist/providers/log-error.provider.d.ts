import { Provider } from '@loopback/core';
import { LogError, Request } from '../types';
export declare class LogErrorProvider implements Provider<LogError> {
    value(): LogError;
    action(err: Error, statusCode: number, req: Request): void;
}
