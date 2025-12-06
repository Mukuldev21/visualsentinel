// visual.spec.js
import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Visual Regression Check', async ({ page }) => {
  // 1. Go to the target website
  await page.goto('https://www.saucedemo.com/');

  // 2. Perform actions (optional - e.g., login)
  // Here we just check the login page structure

  // 3. Take the AI Snapshot
  // This sends the DOM and assets to Percy, not just a static image
  await percySnapshot(page, 'Login Page - Baseline');
});