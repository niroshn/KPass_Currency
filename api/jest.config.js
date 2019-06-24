module.exports = {
  testEnvironment: 'node',
  // verbose: true,
  collectCoverageFrom: ['src/**/*.{js}', '!src/**/*.test.{js}'],
  coverageThreshold: {
    './src/': {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
