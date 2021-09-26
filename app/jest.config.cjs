/** @type import('@jest/types/build/Config').InitialOptions */
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  snapshotResolver: './jest/snapshot-resolver.cjs',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
