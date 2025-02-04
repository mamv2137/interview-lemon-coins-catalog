module.exports = {
  preset: 'react-native',
  'setupFiles': [
    '<rootDir>/src/jest/setup.ts'
  ],
  'moduleNameMapper': {
    '\\.(jpg|ico|jpeg|png)$': '<rootDir>/__mocks__/imageMock.js',
    '\\.(ttf)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
  ],
};
