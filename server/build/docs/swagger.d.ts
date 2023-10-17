export declare const swaggerDocs: {
    swagger: string;
    info: {
        version: string;
        title: string;
        description: string;
        contact: {
            name: string;
            url: string;
            email: string;
        };
    };
    servers: {
        url: string;
        description: string;
    }[];
    basePath: string;
    hostname: string;
    tags: any[];
    schemes: string[];
    consumes: string[];
    produces: string[];
    securityDefinitions: {
        Bearer: {
            type: string;
            name: string;
            in: string;
        };
    };
    paths: {
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
};
//# sourceMappingURL=swagger.d.ts.map