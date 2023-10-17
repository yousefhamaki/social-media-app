export const follows = {
  "/follow/create/{to}": {
    get: {
      tags: ["Follows"],
      summary: "make follow to user",
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
          in: "path",
          name: "to",
          required: true,
          type: "string",
          schema: {
            example: "371e6a64-c5bc-4212-931b-3bd9b44058d3",
            description: "user_id",
          },
          description: "Id of user",
        },
      ],
    },
  },
  "/follow/remove/{to}": {
    delete: {
      tags: ["Follows"],
      summary: "remove follow to user",
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
          in: "path",
          name: "to",
          required: true,
          type: "string",
          schema: {
            example: "371e6a64-c5bc-4212-931b-3bd9b44058d3",
            description: "user_id",
          },
          description: "Id of user",
        },
      ],
    },
  },
  "/follow/block/{to}": {
    patch: {
      tags: ["Follows"],
      summary: "make block to user",
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
          in: "path",
          name: "to",
          required: true,
          type: "string",
          schema: {
            example: "371e6a64-c5bc-4212-931b-3bd9b44058d3",
            description: "user_id",
          },
          description: "Id of user",
        },
      ],
    },
  },
  "/follow/unblock/{to}": {
    delete: {
      tags: ["Follows"],
      summary: "make block to user",
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
          in: "path",
          name: "to",
          required: true,
          type: "string",
          schema: {
            example: "371e6a64-c5bc-4212-931b-3bd9b44058d3",
            description: "user_id",
          },
          description: "Id of user",
        },
      ],
    },
  },
  "/follow/getblocks": {
    get: {
      tags: ["Follows"],
      summary: "get users you make block for him",
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
    },
  },
};
