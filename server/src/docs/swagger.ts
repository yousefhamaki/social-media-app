import { posts } from "./postsDoc";
import { auth } from "./authDoc";
import { user } from "./userDoc";
import { follows } from "./followsDoc";

export const swaggerDocs = {
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
    ...auth,
    ...posts,
    ...user,
    ...follows,
  },
};
