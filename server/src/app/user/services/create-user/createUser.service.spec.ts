import UserService from "./createUser.service";

// Mock dependencies and external services
jest.mock("typeorm");
jest.mock("./../../../traits/passKey.trait.ts");
jest.mock("./../../../traits/hashPassword.trait");
jest.mock("./../../../traits/Token.trait");
jest.mock("./usersCheck.service");
jest.mock("./../dtos/user.dto.ts");

// Create a mock user object for testing
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
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user successfully", async () => {
    // Call the use method with the mock user
    const result = await userService.use(mockUser, "::1");
    console.log(result);

    expect(result).toEqual({ user: mockUser, token: "testtoken" });
  });

  // it("should create a new user successfully", async () => {
  //   // Mock any necessary methods or functions
  //   const createUserSpy = jest
  //     .spyOn(userService, "createUser")
  //     .mockResolvedValue(mockUser);
  //   const generateTokenSpy = jest
  //     .spyOn(userService.token, "generate")
  //     .mockResolvedValue("testtoken");

  //   // Call the use method with the mock user
  //   const result = await userService.use(mockUser);

  //   // Expectations
  //   expect(createUserSpy).toHaveBeenCalledWith(mockUser);
  //   expect(generateTokenSpy).toHaveBeenCalledWith(mockUser);
  //   expect(result).toEqual({ user: mockUser, token: "testtoken" });
  // });

  // it("should throw an error if user creation fails", async () => {
  //   // Mock the createUser method to throw an error
  //   jest
  //     .spyOn(userService, "createUser")
  //     .mockRejectedValue(new Error("User creation failed"));

  //   // Call the use method with the mock user
  //   await expect(userService.use(mockUser)).rejects.toThrow(
  //     "User creation failed"
  //   );
  // });

  // Add more test cases for other scenarios as needed
});
