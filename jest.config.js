module.exports = {
  preset: 'react-native',
  'setupFiles': [
    '<rootDir>/src/jest/setup.ts',
    './node_modules/@react-native-google-signin/google-signin/jest/build/jest/setup.js',
    '<rootDir>/__mocks__/@react-native-async-storage/asyncStorage.js',
  ],
  'moduleNameMapper': {
    '\\.(jpg|ico|jpeg|png)$': '<rootDir>/__mocks__/imageMock.js',
    '\\.(ttf)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
  ],
};
