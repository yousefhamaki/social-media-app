"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
exports.auth = {
    "/user/create": {
        post: {
            tags: ["authentication"],
            summary: "Register user",
            responses: {
                200: {
                    description: "OK",
                },
                400: {
                    description: "Bad Request",
                },
                401: {
                    description: "Unauthorized",
                },
                404: {
                    description: "Not Found",
                },
                500: {
                    description: "Server Error",
                },
            },
            security: [],
            parameters: [
                {
                    in: "body",
                    name: "body",
                    description: "user registration",
                    required: true,
                    schema: {
                        type: "object",
                        required: ["username", "email", "password", "role"],
                        properties: {
                            username: { type: "string", example: "ahmed" },
                            email: {
                                type: "string",
                                example: "email@example.com",
                            },
                            password: {
                                type: "string",
                                example: "12345678$Ahmed",
                            },
                            role: {
                                type: "role",
                                example: "user",
                            },
                        },
                    },
                },
            ],
        },
    },
    "/user/login": {
        post: {
            tags: ["authentication"],
            summary: "admin login",
            responses: {
                200: {
                    description: "OK",
                },
                400: {
                    description: "Bad Request",
                },
                401: {
                    description: "Unauthorized",
                },
                404: {
                    description: "Not Found",
                },
                500: {
                    description: "Server Error",
                },
            },
            security: [],
            parameters: [
                {
                    in: "body",
                    name: "body",
                    description: "admin login",
                    required: true,
                    schema: {
                        type: "object",
                        required: ["email", "password"],
                        properties: {
                            email: {
                                type: "string",
                                example: "email@example.com",
                            },
                            password: {
                                type: "string",
                                example: "12345678$Ahmed",
                            },
                        },
                    },
                },
            ],
        },
    },
};
//# sourceMappingURL=authDoc.js.map