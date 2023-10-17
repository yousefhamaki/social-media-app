"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckQuery = void 0;
const checkQuery_trait_1 = __importDefault(require("../traits/checkQuery.trait"));
const validatorjs_1 = __importDefault(require("validatorjs"));
const valiedReturn_trait_1 = __importDefault(require("../traits/valiedReturn.trait"));
class ParamsCheck {
    constructor() {
        this.checkQuery = new checkQuery_trait_1.default();
    }
    use(required) {
        return (req, res, next) => {
            let data = req.method === "GET" ? req.params : req.body;
            console.log(req);
            if (req.method === "DELETE") {
                data = req.params;
            }
            const requestInfo = this.checkQuery.check(data, required);
            if (requestInfo.length > 0) {
                return res.status(412).json((0, valiedReturn_trait_1.default)(requestInfo));
            }
            else {
                next();
            }
        };
    }
    async validation(body, rules, customMessages, next) {
        const validation = new validatorjs_1.default(body, rules, customMessages);
        if (validation.passes()) {
            return next();
        }
        else {
            return validation.errors;
        }
    }
}
const checkQuery = new checkQuery_trait_1.default();
const CheckQuery = (required) => {
    return (req, res, next) => {
        let data = req.method === "GET" ? req.params : req.body;
        if (req.method === "DELETE") {
            data = req.params;
        }
        const requestInfo = checkQuery.check(data, required);
        if (requestInfo.length > 0) {
            return res.status(412).json((0, valiedReturn_trait_1.default)(requestInfo));
        }
        else {
            return next();
        }
    };
};
exports.CheckQuery = CheckQuery;
exports.default = ParamsCheck;
//# sourceMappingURL=paramsCheck.middleware.js.map