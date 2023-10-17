export declare const user: {
    "/user/change/password": {
        post: {
            tags: string[];
            summary: string;
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                401: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
            security: {
                Bearer: any[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                type: string;
                schema: {
                    example: string;
                    description: string;
                };
                description: string;
            }[];
        };
    };
    "/user/change/update": {
        post: {
            tags: string[];
            summary: string;
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                401: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
            security: {
                Bearer: any[];
            }[];
            parameters: {
                in: string;
                name: string;
                description: string;
                required: boolean;
                schema: {
                    type: string;
                    required: string[];
                    properties: {
                        username: {
                            type: string;
                            example: string;
                        };
                        email: {
                            type: string;
                            example: string;
                        };
                        password: {
                            type: string;
                            example: string;
                        };
                    };
                };
            }[];
        };
    };
};
//# sourceMappingURL=userDoc.d.ts.map