import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import dotenv from "dotenv"

dotenv.config({
  path: path.resolve(process.cwd(), 'env', `.env.${process.env.ENV || 'local'}`),
})
export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: [
    ['html', { open: 'never' }]
],
  use: {
    baseURL: process.env.URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
       
 },
    },
    


  ],
});
