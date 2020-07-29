export declare const tokenDef: {
    components: {
        schemas: {
            tokenComponent: {
                type: string;
                title: string;
                description: string;
                properties: {
                    VendorCode: {
                        type: string;
                    };
                    PartnerCode: {
                        type: string;
                    };
                };
            };
        };
    };
    basePath: string;
    paths: {
        '/token': any;
    };
};
