"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.user = {
    "/user/change/password": {
        post: {
            tags: ["user"],
            summary: "change password of user",
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
                500: {
                    description: "Server Error",
                },
            },
            security: [
                {
                    Bearer: [],
                },
            ],
            parameters: [
                {
                    in: "body",
                    name: "body",
                    required: true,
                    type: "string",
                    schema: {
                        example: "example@example.com",
                        description: "",
                    },
                    description: "email of user",
                },
                {
                    in: "body",
                    name: "oldpassword",
                    required: true,
                    type: "string",
                    schema: {
                        example: "12345678#Youse",
                        description: "",
                    },
                    description: "Old password of user",
                },
                {
                    in: "body",
                    name: "newpassword",
                    required: true,
                    type: "string",
                    schema: {
                        example: "12345678#Youse",
                        description: "",
                    },
                    description: "New password of user",
                },
            ],
        },
    },
    "/user/change/update": {
        post: {
            tags: ["user"],
            summary: "update user info",
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
                500: {
                    description: "Server Error",
                },
            },
            security: [
                {
                    Bearer: [],
                },
            ],
            parameters: [
                {
                    in: "body",
                    name: "body",
                    description: "superadmin registration",
                    required: true,
                    schema: {
                        type: "object",
                        required: ["username", "email", "password"],
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
                        },
                    },
                },
            ],
        },
    },
};
//# sourceMappingURL=userDoc.js.map