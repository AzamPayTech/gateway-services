export declare const confirmPayDef: {
    components: {
        schemas: {
            confirmPaymentComponent: {
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
        '/confirmpayment': any;
    };
};
