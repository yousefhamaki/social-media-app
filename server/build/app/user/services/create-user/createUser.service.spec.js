"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_service_1 = __importDefault(require("./createUser.service"));
jest.mock("typeorm");
jest.mock("./../../../traits/passKey.trait.ts");
jest.mock("./../../../traits/hashPassword.trait");
jest.mock("./../../../traits/Token.trait");
jest.mock("./usersCheck.service");
jest.mock("./../dtos/user.dto.ts");
const mockUser = {
    id: "1",
    username: "testuser",
    email: "test@example.com",
    password: "password",
    passkey: "passkey",
    role: "user",
    created_at: new Date(),
    updated_at: new Date(),
};
describe("UserService", () => {
    let userService;
    beforeEach(() => {
        userService = new createUser_service_1.default();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should create a new user successfully", async () => {
        const result = await userService.use(mockUser, "::1");
        console.log(result);
        expect(result).toEqual({ user: mockUser, token: "testtoken" });
    });
});
//# sourceMappingURL=createUser.service.spec.js.map