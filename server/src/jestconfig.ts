// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["build"], // Exclude the "build" directory from testing
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Path to your tsconfig.json
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
