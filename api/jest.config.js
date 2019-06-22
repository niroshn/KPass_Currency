module.exports = {
  testEnvironment: 'node',
  // verbose: true,
  collectCoverageFrom: ['src/**/*.{js}', '!src/**/*.test.{js}'],
  coverageThreshold: {
    './src/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
