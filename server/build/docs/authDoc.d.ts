export declare const auth: {
    "/user/create": {
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
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
            security: any[];
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
                        role: {
                            type: string;
                            example: string;
                        };
                    };
                };
            }[];
        };
    };
    "/user/login": {
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
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
            security: any[];
            parameters: {
                in: string;
                name: string;
                description: string;
                required: boolean;
                schema: {
                    type: string;
                    required: string[];
                    properties: {
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
//# sourceMappingURL=authDoc.d.ts.map