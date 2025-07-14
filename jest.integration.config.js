module.exports = {
  testMatch: ['**/server/tests/integration/**/*.test.js'],
  globalSetup: '<rootDir>/server/tests/setup.js',
  globalTeardown: '<rootDir>/server/tests/teardown.js',
  coverageDirectory: '<rootDir>/coverage/integration',
  collectCoverageFrom: [
    'server/src/controllers/**/*.js',
    'server/src/routes/**/*.js',
    '!**/node_modules/**'
  ],
  testTimeout: 15000
};