module.exports = {
  moduleNameMapper: {
    "^@/(.+)$": "<rootDir>/src/$1" // ここ
  }, 
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx']
}