export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TypeScript files
    '^.+\\.(js|jsx|mjs)$': 'babel-jest', // Use babel-jest for JavaScript files (optional, if using ES modules)
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'jsx'],
};