module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/components/**/*.[jt]s?(x)',
    '**/mixins/*.spec.[jt]s?(x)'
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      '!**/node_modules/**',
      '!**/*.config.js',
      '!**/vendor/**',
      '!**/tests/e2e/**',
      '!**/main.js',
      '!**/coverage/**',
      '!./src/router/**',
      '!/src/mixins/methods.js'
  ],

  //Vishesh's config
  // collectCoverage: true,
  // collectCoverageFrom: [
  //     '**/*.{js,vue}',
  //     '!**/node_modules/**',
  //     '!**/*.config.js',
  //     '!**/vendor/**',
  //     '!**/tests/e2e/**',
  //     '!**/main.js',
  //     '!**/coverage/**',
  //     '!./src/router/**',
  //   ],
  //   coverageThreshold: {
  //      global: {
  //        branches: 80,
  //        functions: 80,
  //        lines: 80,
  //        statements: -10
  //      }
  //   },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}