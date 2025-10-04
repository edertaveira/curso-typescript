import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  testMatch: ['**/*.spec.ts'],
  // opcional: ignore unit
  testIgnore: ['**/*.test.ts', '**/*.test.tsx'],
});