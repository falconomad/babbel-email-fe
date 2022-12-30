module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/*.test.tsx"],
  testEnvironment: "node",
  setupFilesAfterEnv: ["./setupTests.ts"],
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
};
