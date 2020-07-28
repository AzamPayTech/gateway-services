import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
export { ApplicationConfig };
declare const AzamPayGatewayServices_base: (new (...args: any[]) => {
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/core").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding<any>[];
    applicationBooter(subApp: import("@loopback/core").Application & import("@loopback/boot").Bootable, filter?: import("@loopback/core").BindingFilter | undefined): import("@loopback/boot").Binding<import("@loopback/boot").Booter>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<C>;
    mountComponentBooters(componentInstanceOrClass: import("@loopback/core").Constructor<unknown> | import("@loopback/boot").InstanceWithBooters): void;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T_1>(controllerCtor: import("@loopback/core").Constructor<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    server: <T_2 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_2>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_2>;
    servers: <T_3 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_3>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_4 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_4>) => Promise<T_4>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_5 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_5>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_5>;
    service: <S>(cls: import("@loopback/core").Constructor<S | import("@loopback/core").Provider<S>>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_6 extends import("@loopback/core").ContextEvent>(type: string, event: T_6) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: string | import("@loopback/core").BindingKey<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_7 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined) => import("@loopback/core").ContextView<T_7>;
    contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    getOwnerContext: (key: import("@loopback/core").BindingAddress<unknown>) => import("@loopback/core").Context | undefined;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: string | RegExp | Record<string, any>) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_8>(key: import("@loopback/core").BindingAddress<T_8>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_8>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptions | import("@loopback/core").ResolutionSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (event: string | symbol) => Function[];
    rawListeners: (event: string | symbol) => Function[];
    emit: (event: string | symbol, ...args: any[]) => boolean;
    eventNames: () => (string | symbol)[];
    listenerCount: (type: string | symbol) => number;
}) & (new (...args: any[]) => {
    serviceProvider<S_1>(provider: import("@loopback/core").Constructor<import("@loopback/core").Provider<S_1>>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined): import("@loopback/boot").Binding<S_1>;
    component<T_1_1 extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<T_1_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<T_1_1>;
    mountComponentServices<T_2_1 extends import("@loopback/core").Component = import("@loopback/core").Component>(component: import("@loopback/core").Constructor<T_2_1>, componentBindingKey?: string | import("@loopback/core").BindingKey<T_2_1> | undefined): void;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T_3_1>(controllerCtor: import("@loopback/core").Constructor<T_3_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_3_1>;
    server: <T_4_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_4_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4_1>;
    servers: <T_5_1 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_5_1>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_6_1 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_6_1>) => Promise<T_6_1>;
    start: () => Promise<void>;
    stop: () => Promise<void>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_7_1 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_7_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_7_1>;
    service: <S_2>(cls: import("@loopback/core").Constructor<S_2 | import("@loopback/core").Provider<S_2>>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S_2>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_8_1 extends import("@loopback/core").ContextEvent>(type: string, event: T_8_1) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType_10 = any>(key: import("@loopback/core").BindingAddress<ValueType_10>) => import("@loopback/boot").Binding<ValueType_10>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType_4 = any>(key?: string | import("@loopback/core").BindingKey<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType_4>;
    getConfigAsValueOrPromise: <ConfigValueType_1_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1_1 | undefined>;
    getConfig: <ConfigValueType_2_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2_1 | undefined>;
    getConfigSync: <ConfigValueType_3_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3_1 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_9 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined) => import("@loopback/core").ContextView<T_9>;
    contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    getOwnerContext: (key: import("@loopback/core").BindingAddress<unknown>) => import("@loopback/core").Context | undefined;
    find: <ValueType_1_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1_1>>[];
    findByTag: <ValueType_2_1 = any>(tagFilter: string | RegExp | Record<string, any>) => Readonly<import("@loopback/boot").Binding<ValueType_2_1>>[];
    get: {
        <ValueType_3_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3_1>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3_1>;
        <ValueType_4_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4_1>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4_1 | undefined>;
    };
    getSync: {
        <ValueType_5_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5_1>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5_1;
        <ValueType_6_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6_1>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6_1 | undefined;
    };
    getBinding: {
        <ValueType_7_1 = any>(key: import("@loopback/core").BindingAddress<ValueType_7_1>): import("@loopback/boot").Binding<ValueType_7_1>;
        <ValueType_8_1>(key: import("@loopback/core").BindingAddress<ValueType_8_1>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8_1> | undefined;
    };
    findOrCreateBinding: <T_10>(key: import("@loopback/core").BindingAddress<T_10>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_10>;
    getValueOrPromise: <ValueType_9_1>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9_1>, optionsOrSession?: import("@loopback/core").ResolutionOptions | import("@loopback/core").ResolutionSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9_1 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (event: string | symbol) => Function[];
    rawListeners: (event: string | symbol) => Function[];
    emit: (event: string | symbol, ...args: any[]) => boolean;
    eventNames: () => (string | symbol)[];
    listenerCount: (type: string | symbol) => number;
}) & typeof RestApplication;
export declare class AzamPayGatewayServices extends AzamPayGatewayServices_base {
    constructor(options?: ApplicationConfig);
}
