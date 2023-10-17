export declare const posts: {
    "/posts/create": {
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
            security: {
                Bearer: any[];
            }[];
            consumes: string[];
            parameters: ({
                in: string;
                name: string;
                required: boolean;
                requestBody: {
                    required: boolean;
                    schema: {
                        example: string;
                    };
                };
                type?: undefined;
                properties?: undefined;
                collectionFormat?: undefined;
            } | {
                name: string;
                in: string;
                required: boolean;
                type: string;
                properties: {
                    images: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
                collectionFormat: string;
                requestBody?: undefined;
            })[];
        };
    };
    "/posts/{user_id}": {
        get: {
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
                };
                description: string;
            }[];
        };
    };
    "/posts": {
        get: {
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
};
//# sourceMappingURL=postsDoc.d.ts.map