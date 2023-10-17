export const posts = {
  "/posts/create": {
    post: {
      tags: ["posts"],
      summary: "add new post",
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
      security: [
        {
          Bearer: [],
        },
      ],
      consumes: ["multipart/form-data"],
      parameters: [
        {
          in: "formData",
          name: "title",
          required: true,
          requestBody: {
            required: true,
            schema: {
              example: "post title",
            },
          },
        },
        {
          in: "formData",
          name: "content",
          required: true,
          requestBody: {
            required: true,
            schema: {
              example: "post content ",
            },
          },
        },
        {
          name: "files",
          in: "formData",
          required: false,
          type: "file",
          properties: {
            images: {
              type: "array",
              items: {
                type: "file",
              },
            },
          },
          collectionFormat: "multi",
        },
        // {
        //   in: "formData",
        //   name: "files",
        //   required: false,
        //   type: "file",
        //   requestBody: {
        //     required: false,
        //   },
        // },
      ],
      // requestBody: {
      //   required: true,
      //   content: {
      //     "multipart/form-data": {
      //       schema: {
      //         type: "object",
      //         properties: {
      //           title: {
      //             type: "string",
      //           },
      //           content: {
      //             type: "string",
      //           },
      //           images: {
      //             type: "file",
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
      // content: {
      //   "multipart/form-data": {
      //     schema: {
      //       type: "object",
      //       properties: {
      //         title: { type: "string" },
      //         content: { type: "string" },
      //         images: { type: "string", format: "binary" },
      //       },
      //     },
      //   },
      // },
    },
  },
  "/posts/{user_id}": {
    get: {
      tags: ["posts"],
      summary: "get user posts",
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
      security: [
        {
          Bearer: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "user_id",
          required: true,
          type: "string",
          schema: {
            example: "34c84dd0-9003-4c72-9cc8-056c783a309b",
          },
          description: "id of user",
        },
      ],
    },
  },
  "/posts": {
    get: {
      tags: ["posts"],
      summary: "get all posts pagination",
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
      security: [
        {
          Bearer: [],
        },
      ],
      parameters: [
        {
          in: "query",
          name: "page",
          required: false,
          type: "string",
          schema: {
            example: "1",
            description: "the page or number of skip posts",
          },
          description: "number of posts page",
        },
      ],
    },
  },
};
