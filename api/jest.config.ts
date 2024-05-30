import { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true
};

export default config;
