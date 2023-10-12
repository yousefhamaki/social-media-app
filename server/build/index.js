"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
require("reflect-metadata");
const config_service_1 = __importDefault(require("./shared/services/config.service"));
const handler_service_1 = __importDefault(require("./shared/services/handler.service"));
const main_routes_1 = __importDefault(require("./routes/main.routes"));
require("reflect-metadata");
const app = (0, express_1.default)();
const config = new config_service_1.default();
const port = config.port;
const handler = new handler_service_1.default();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("common"));
app.use((0, helmet_1.default)());
app.use((0, express_rate_limit_1.default)({
    windowMs: config.TimeLimit * (60 * 1000),
    max: config.RequestLimit,
    standardHeaders: true,
    legacyHeaders: false,
    message: config.MessageLimit,
}));
if (config.ActiveHome) {
    app.get("/", handler.Homeresponse);
}
app.use(main_routes_1.default);
app.use(handler.ErrorResponse);
app.use(handler.HandleError);
app.listen(port, () => console.log(`Server is starting on port ${port}`));
//# sourceMappingURL=index.js.map