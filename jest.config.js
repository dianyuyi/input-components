module.exports = {
  setupFiles: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^config(.*)$': '<rootDir>/config$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^pages(.*)$': '<rootDir>/pages$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}],
  },
  collectCoverageFrom: [
    './{src,pages}/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/{config,constants,styles,types,__fixtures__}/**',
  ],
  watchPathIgnorePatterns: ['dist'],
};
