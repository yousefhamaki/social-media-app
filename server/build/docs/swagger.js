"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const postsDoc_1 = require("./postsDoc");
const authDoc_1 = require("./authDoc");
const userDoc_1 = require("./userDoc");
exports.swaggerDocs = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "social media",
        description: "API for social media App",
        contact: {
            name: "social media App",
            url: "",
            email: "",
        },
    },
    servers: [
        {
            url: "http://localhost:4000",
            description: "Dev server",
        },
    ],
    basePath: "/",
    hostname: "localhost:5000",
    tags: [],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
        Bearer: {
            type: "apiKey",
            name: "authorization",
            in: "header",
        },
    },
    paths: {
        ...authDoc_1.auth,
        ...postsDoc_1.posts,
        ...userDoc_1.user,
    },
};
//# sourceMappingURL=swagger.js.map