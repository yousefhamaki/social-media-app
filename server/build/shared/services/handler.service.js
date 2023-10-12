"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    ErrorResponse(_req, res) {
        res.status(404).json({
            status: "error",
            message: "ohh you are lost, read the documentation to find your way",
        });
    }
    async Homeresponse(_, res) {
        return res.status(200).json({
            status: "success",
            message: "Welcome to social media api, Read Documentation to know more about using this api.",
        });
    }
    HandleError(err, req, res, next) {
        console.error(err);
        const internalServerError = new Error("Internal Server Error");
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            data: {
                message: err.message,
            },
        });
    }
}
exports.default = Handler;
//# sourceMappingURL=handler.service.js.map