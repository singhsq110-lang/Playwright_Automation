// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

const config =({
 testDir: './tests',
 timeout: 40*1000,
 expect:
 {
   timeout: 40*1000,
 },
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
 channel : 'chrome',
    trace: 'on-first-retry',
    headless: false,
  },

})

module.exports=config;