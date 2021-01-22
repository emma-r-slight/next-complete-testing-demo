module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/jest/setup.ts"],
  testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "cypress", "/.next/"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/src/jest/cssTransformer.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
