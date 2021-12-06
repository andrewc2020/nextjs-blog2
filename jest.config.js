module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/tests/e2e'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    
  };