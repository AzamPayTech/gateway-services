export declare const checkoutApiDef: {
    components: {
        schemas: {
            checkoutComponent: {
                type: string;
                parameters: {
                    name: string;
                    schema: {
                        type: string;
                    };
                    in: string;
                }[];
            };
        };
    };
    basePath: string;
    paths: {
        '/checkout': any;
    };
};
