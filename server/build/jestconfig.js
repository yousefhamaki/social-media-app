"use strict";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["build"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
//# sourceMappingURL=jestconfig.js.map