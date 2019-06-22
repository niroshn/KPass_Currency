module.exports = {
  testEnvironment: 'node',
  // verbose: true,
  collectCoverageFrom: ['src/**/*.{js}', '!src/**/*.test.{js}'],
  coverageThreshold: {
    './src/': {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: [],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
