module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ["jest-extended/all"],
  testRegex: ".*test\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
