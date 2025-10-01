export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
        },
      }],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.(ts|tsx|js)',
      '<rootDir>/src/**/*.(test|spec).(ts|tsx|js)',
    ],
    collectCoverageFrom: [
      'src/**/*.(ts|tsx)',
      '!src/**/*.d.ts',
      '!src/main.tsx',
      '!src/vite-env.d.ts',
    ],
  };
  