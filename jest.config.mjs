// jest.config.mjs
export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
  setupFiles: ['<rootDir>/jest.setup.mjs'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,mjs}',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(svg|png|jpg|jpeg|gif)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^/public/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!@babel/runtime)'],
}
