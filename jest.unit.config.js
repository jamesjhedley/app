module.exports = {
  globals: {
    "ts-jest": {},
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  reporters: ["default"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/*.test.ts"],
  testEnvironment: "node",
  modulePaths: ["node_modules", "."],
  testPathIgnorePatterns: ["node_modules"],
  collectCoverageFrom: [
    "src/kafka/handlers/**/*.ts",
    "src/kafka/consumers/**/*.ts",
    "src/kafka/producers/**/*.ts",
    "src/services/**/*.ts",
    "!**/index.ts",
    "!**/mocks/*",
  ],
};
