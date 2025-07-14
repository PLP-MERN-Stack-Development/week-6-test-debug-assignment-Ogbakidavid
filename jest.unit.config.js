module.exports = {
  testMatch: [
    '**/client/src/tests/unit/**/*.test.js?(x)',
    '**/server/tests/unit/**/*.test.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/client/src/tests/setup.js'],
  testEnvironment: 'jest-environment-jsdom', 
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageDirectory: '<rootDir>/coverage/unit',
  collectCoverageFrom: [
    'client/src/**/*.{js,jsx}',
    '!client/src/index.js',
    'server/src/utils/**/*.js',
    '!**/node_modules/**'
  ]
};