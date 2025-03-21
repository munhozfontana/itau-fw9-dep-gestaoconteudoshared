/* eslint-disable */
export default {
  displayName: 'lib-gestao-conteudo-utils',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/lib-gestao-conteudo-utils',
};
