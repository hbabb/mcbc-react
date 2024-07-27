export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx}',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^/public/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@babel/runtime)', // Ignore node_modules except @babel/runtime
  ],
}
