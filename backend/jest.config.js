/** @type{import('ts-jest/dist/types').InitialOptionsJest} */

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.js", "**/**/*.test.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  verbose: true,
  forceExit: true,
};
