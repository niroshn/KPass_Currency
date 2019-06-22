module.exports = {
  testEnvironment: 'node',
  // verbose: true,
  collectCoverageFrom: ['src/**/*.{js}', '!src/**/*.test.{js}'],
  coverageThreshold: {
    './src/': {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
